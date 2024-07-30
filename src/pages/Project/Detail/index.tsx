import {useEffect, useState} from 'react';
import {KTTooltip} from '../../../metronic/core';
import {useParams} from 'react-router-dom';
import {keepPreviousData, useQuery} from '@tanstack/react-query';
import {callApiGetProjectDetail} from '../../../api/callers/projectApi.tsx';
import PageLoading from '../../Components/PageLoading.tsx';
import ProjectDetailContent from './ProjectDetailContent.tsx';

const ProjectDetail = () => {
    const param = useParams();
    const [projectUUID, setProjectUUID] = useState<string>(param.uuid);
    const [project, setProject] = useState<any>(null);

    const {data, isLoading} = useQuery({
        queryKey: ['project', projectUUID],
        queryFn: () => callApiGetProjectDetail({uuid: projectUUID}),
        placeholderData: keepPreviousData
    });

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
                !isLoading && project !== null
                    ? <ProjectDetailContent project={project}/>
                    : <PageLoading isLoading={true}/>
            }
        </>
    );
};

export default ProjectDetail;
