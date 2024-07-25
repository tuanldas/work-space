import {useSelector} from 'react-redux';
import {selectAuthSlice} from '../../store/authSlice/selector.tsx';
import {Link, useLocation, useSearchParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {keepPreviousData, useQuery} from '@tanstack/react-query';
import {callApiGetProjects} from '../../api/callers/projectApi.tsx';
import ProjectItem from './ProjectItem.tsx';
import clsx from 'clsx';

const Project = () => {
    const authData = useSelector(selectAuthSlice);
    const [searchParams] = useSearchParams();
    const location = useLocation();
    const pageParam = searchParams.get('page');
    const [page, setPage] = useState<number>(1);
    const [projects, setProjects] = useState<any>(null);
    const isShowPrevious = projects !== null ? projects.meta.current_page == 1 : false;
    const isShowNext = projects !== null ? projects.meta.last_page == projects.meta.current_page : 1;

    const {data, isLoading} = useQuery({
        queryKey: ['projects', page],
        queryFn: () => callApiGetProjects(authData.accessToken, page),
        placeholderData: keepPreviousData
    });

    useEffect(() => {
        if (data) {
            setProjects(data.data);
        }
    }, [data]);

    useEffect(() => {
        const initialPage = pageParam ? parseInt(pageParam, 10) : 1;
        setPage(initialPage);
    }, [pageParam]);

    const renderUrlPreviousPagination = () => {
        if (isShowPrevious) {
            return window.location.origin + location.pathname + '?page=' + (projects.meta.current_page);
        }
        return window.location.origin + location.pathname + '?page=' + (projects.meta.current_page - 1);
    };

    const renderUrlNextPagination = () => {
        if (isShowNext) {
            return window.location.origin + location.pathname + '?page=' + (projects.meta.current_page);
        }
        return window.location.origin + location.pathname + '?page=' + (projects.meta.current_page + 1);
    };

    const renderUrlPagination = (page: number) => {
        return window.location.origin + location.pathname + '?page=' + page;
    };

    return (
        <div className="flex flex-col items-stretch gap-5 lg:gap-7.5 mb-10">
            {
                !isLoading && projects !== null
                    ? <>
                        <div id="projects_cards">
                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-7.5">
                                {
                                    projects.data.map((project: any, index: number) => (
                                        <ProjectItem key={index} project={project}/>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-5 justify-between">
                            <div></div>
                            <div className="pagination">
                                <Link to={renderUrlPreviousPagination()}
                                      className={clsx('btn', {'disabled': isShowPrevious})}>
                                    <i className="ki-outline ki-black-left">
                                    </i>
                                </Link>
                                {
                                    Array.from({length: projects.meta.last_page}).map((_, index) => {
                                        if (index + 1 <= 3) {
                                            return <Link to={renderUrlPagination(index + 1)} key={index}
                                                         className={clsx('btn', {'active': index + 1 == projects.meta.current_page})}>
                                                {index + 1}
                                            </Link>;
                                        } else if (index + 1 == 4) {
                                            return <span key={index} className="btn disabled">...</span>;

                                        } else if ((projects.meta.last_page - (index + 1)) < 3) {
                                            return <Link to={renderUrlPagination(index + 1)} key={index}
                                                         className={clsx('btn', {'active': index + 1 == projects.meta.current_page})}>
                                                {index + 1}
                                            </Link>;
                                        }
                                    })
                                }
                                <Link className="btn" to={renderUrlNextPagination()}>
                                    <i className="ki-outline ki-black-right">
                                    </i>
                                </Link>
                            </div>
                        </div>
                    </>
                    : null
            }
        </div>
    );
};

export default Project;
