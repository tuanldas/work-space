import {Link, useLocation, useSearchParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {keepPreviousData, useQuery} from '@tanstack/react-query';
import {callApiGetProjects} from '../../api/callers/projectApi.tsx';
import ProjectItem from './ProjectItem.tsx';
import clsx from 'clsx';

const Project = () => {
    const [searchParams] = useSearchParams();
    const location = useLocation();
    const pageParam = searchParams.get('page');
    const [page, setPage] = useState<number>(1);
    const [projects, setProjects] = useState<any>(null);
    const [pagination, setPagination] = useState<any>([]);

    const {data, isLoading} = useQuery({
        queryKey: ['projects', page],
        queryFn: () => callApiGetProjects(page),
        placeholderData: keepPreviousData
    });

    useEffect(() => {
        if (data) {
            setProjects(data.data);
            setPagination(getPagination(data.data.meta.current_page, data.data.meta.last_page, 5));
        }
    }, [data]);

    useEffect(() => {
        const initialPage = pageParam ? parseInt(pageParam, 10) : 1;
        setPage(initialPage);
    }, [pageParam]);

    const renderUrlPreviousPagination = (current_page: number, isShowPrevious: boolean) => {
        if (isShowPrevious) {
            return window.location.origin + location.pathname + '?page=' + (current_page);
        }
        return window.location.origin + location.pathname + '?page=' + (current_page - 1);
    };
    const renderUrlNextPagination = (current_page: number, isShowNext: boolean) => {
        if (isShowNext) {
            return window.location.origin + location.pathname + '?page=' + (current_page);
        }
        return window.location.origin + location.pathname + '?page=' + (current_page + 1);
    };

    const renderUrlPagination = (page: number) => {
        return window.location.origin + location.pathname + '?page=' + page;
    };

    const getPagination = (currentPage, totalPages, maxPagesToShow) => {
        const pages = [];
        const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);

        pages.push({
            url: renderUrlPreviousPagination(currentPage, currentPage <= 1),
            isDisabled: currentPage <= 1,
            isActive: false,
            content:
                <i className="ki-outline ki-black-left"></i>
        });

        if (totalPages <= maxPagesToShow) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push({
                    url: renderUrlPagination(i),
                    isDisabled: false,
                    isActive: i == currentPage,
                    content: i
                });
            }
        } else {
            if (currentPage <= halfMaxPagesToShow) {
                for (let i = 1; i <= maxPagesToShow; i++) {
                    pages.push({
                        url: renderUrlPagination(i),
                        isDisabled: false,
                        isActive: i == currentPage,
                        content: i
                    });
                }
                if (currentPage + halfMaxPagesToShow < totalPages) {
                    pages.push({
                        url: '#',
                        isDisabled: true,
                        isActive: false,
                        content: '...'
                    });
                    pages.push({
                        url: renderUrlPagination(totalPages),
                        isDisabled: false,
                        isActive: totalPages == currentPage,
                        content: totalPages
                    });
                }
            } else if (currentPage + halfMaxPagesToShow >= totalPages) {
                pages.push({
                    url: renderUrlPagination(1),
                    isDisabled: false,
                    isActive: 1 == currentPage,
                    content: 1
                });
                pages.push({
                    url: '#',
                    isDisabled: true,
                    isActive: false,
                    content: '...'
                });
                for (let i = totalPages - maxPagesToShow + 1; i <= totalPages; i++) {
                    pages.push({
                        url: renderUrlPagination(i),
                        isDisabled: false,
                        isActive: i == currentPage,
                        content: i
                    });
                }
            } else {
                pages.push({
                    url: renderUrlPagination(1),
                    isDisabled: false,
                    isActive: 1 == currentPage,
                    content: 1
                });
                pages.push({
                    url: '#',
                    isDisabled: true,
                    isActive: false,
                    content: '...'
                });
                for (let i = currentPage - halfMaxPagesToShow; i <= currentPage + halfMaxPagesToShow; i++) {
                    pages.push({
                        url: renderUrlPagination(i),
                        isDisabled: false,
                        isActive: i == currentPage,
                        content: i
                    });
                }
                pages.push({
                    url: '#',
                    isDisabled: true,
                    isActive: false,
                    content: '...'
                });
                pages.push({
                    url: renderUrlPagination(totalPages),
                    isDisabled: false,
                    isActive: totalPages == currentPage,
                    content: totalPages
                });
            }
        }
        pages.push({
            url: renderUrlNextPagination(currentPage, currentPage >= totalPages),
            isDisabled: currentPage >= totalPages,
            isActive: false,
            content: <i className="ki-outline ki-black-right"></i>
        });

        return pages;
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
                                {
                                    pagination.map((page, index) => (
                                        <Link to={page.url} key={index}
                                              className={clsx('btn',
                                                  {'active': page.isActive},
                                                  {'disabled': page.isDisabled}
                                              )}>
                                            {page.content}
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </>
                    : null
            }
        </div>
    );
};

export default Project;
