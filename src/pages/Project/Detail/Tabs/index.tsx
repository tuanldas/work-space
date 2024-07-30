import {useEffect} from 'react';
import {KTTabs} from '../../../../metronic/core';
import TabOverview from './TabOverview.tsx';
import TabTasks from './TabTasks.tsx';

const ProjectDetailTabs = () => {
    useEffect(() => {
        KTTabs.init();
    }, []);

    return (
        <>
            <div className="tabs border-none gap-0" data-tabs="true">
                <button
                    className="tab py-5 me-6 text-base text-gray-500 font-semibold active active:text-primary-active"
                    data-tab-toggle="#project-tab-overview">
                    Overview
                </button>
                <button className="tab py-5 me-6 text-base text-gray-500 font-semibold"
                        data-tab-toggle="#project-tab-tasks">
                    Tasks
                </button>
            </div>
            <TabOverview tabId={'project-tab-overview'}
                         isActive={true}/>
            <TabTasks tabId={'project-tab-tasks'}
                      isActive={false}/>
        </>
    );
};

export default ProjectDetailTabs;
