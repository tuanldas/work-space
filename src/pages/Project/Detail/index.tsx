import {toAbsoluteUrl} from '../../../helpers/AssetHelpers.ts';
import {useEffect, useState} from 'react';
import {KTTooltip} from '../../../metronic/core';
import {useParams} from 'react-router-dom';
import {keepPreviousData, useQuery} from '@tanstack/react-query';
import {callApiGetProjectDetail} from '../../../api/callers/projectApi.tsx';
import {ProjectStatus} from '../../../constants/ProjectStatusEnum.tsx';
import PageLoading from '../../Components/PageLoading.tsx';

const ProjectDetail = () => {
    const param = useParams();
    const [projectUUID, setProjectUUID] = useState<string>(param.uuid);
    const [project, setProject] = useState<any>(null);

    const {data, isLoading} = useQuery({
        queryKey: ['project', projectUUID],
        queryFn: () => callApiGetProjectDetail({uuid: projectUUID}),
        placeholderData: keepPreviousData
    });
    console.log(project);

    useEffect(() => {
        KTTooltip.init();
    }, []);

    useEffect(() => {
        if (param.uuid !== undefined) {
            setProjectUUID(param.uuid);
        }
    }, [param]);


    useEffect(() => {
        if (data) {
            setProject(data.data.data);
        }
    }, [data]);

    return (
        <>
            {
                !isLoading && project !== null ?
                    <div className="card mb-6 xl:mb-9">
                        <div className="card-body pt-9 pb-0">
                            <div className="flex flex-wrap sm:flex-nowrap mb-6">
                                <div
                                    className="flex justify-center items-center flex-shrink-0 bg-secondary dark:bg-gray-100 rounded h-[100px] lg:w-[150px] lg:h-[150px] me-7 mb-4">
                                    <img className="max-w-[50px] lg:max-w-[75px] w-[100px]"
                                         src={project.icon} alt={'#'}/>
                                </div>
                                <div className="flex-grow">
                                    <div className="flex justify-between items-start flex-wrap mb-2">
                                        <div className="flex flex-col">
                                            <div className="flex items-center mb-1">
                                                <a href="#"
                                                   className="text-gray-800 hover:text-primary text-2xl font-medium me-3 transition-colors duration-200">{project.name}</a>
                                                <span
                                                    className={`badge badge-outline border-none me-auto ${ProjectStatus.getClassname(project.status.value)}`}>{project.status.name}</span>
                                            </div>
                                            <div className="flex flex-wrap font-medium mb-4 text-sm text-gray-500">
                                                {project.desc}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap justify-start">
                                        <div className="flex flex-wrap">
                                            <div
                                                className="border border-gray-300 border-dashed rounded min-w-[125px] py-3 px-4 me-6 mb-3">
                                                <div className="flex items-center">
                                                    <div className="text-sm font-semibold dark:text-gray-900">
                                                        {project.due_date}
                                                    </div>
                                                </div>
                                                <div className="font-medium text-base text-gray-500">
                                                    Due Date
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap items-center ml-2.5 mb-3">
                                            <div
                                                className="inline-block flex-shrink-0 cursor-pointer relative z-0 ml-[-10px] transition-all duration-1000 ease-[ease] rounded-full hover:z-1 hover:shadow-info"
                                                data-tooltip="#tooltip_user">
                                                <img className="w-[35px] h-[35px] rounded-full" alt="Pic"
                                                     src={toAbsoluteUrl('media/avatars/300-1.png')}/>
                                            </div>
                                            <div
                                                className="tooltip transition-opacity duration-400 bg-light text-dark dark:text-gray-700"
                                                id="tooltip_user">
                                                Alan
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <PageLoading isLoading={true}/>
            }
        </>
    );
};

export default ProjectDetail;
