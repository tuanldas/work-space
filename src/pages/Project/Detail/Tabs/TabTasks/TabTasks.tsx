import clsx from 'clsx';
import {useEffect} from 'react';
import {KTTooltip} from '../../../../../metronic/core';
import Task from './Task.tsx';

const TabTasks = ({tabId, isActive}) => {
    useEffect(() => {
        KTTooltip.createInstances();
    }, []);

    return (
        <div id={tabId} className={clsx(
            {'hidden': !isActive}
        )}>
            <div className="row gap-9">
                <div className="w-[450px]">
                    <div className="mb-9">
                        <div className="flex justify-between items-center">
                            <div className="font-semibold text-base text-gray-900">
                                Yet to start
                                <span className="text-sm text-gray-500 ms-2">2</span>
                            </div>
                            <div>
                                <button type="button"
                                        className="btn btn-sm btn-icon text-gray-700 border-gray-300 bg-light border-none hover:bg-primary-light group transition-colors duration-200">
                                    <i className="text-gray-500 ki-duotone ki-element-plus text-sm group-hover:text-primary transition-colors duration-200"></i>
                                </button>
                            </div>
                        </div>
                        <div className="h-[3px] w-full bg-warning"></div>
                    </div>
                    <Task/>
                </div>
            </div>
        </div>
    );
};

export default TabTasks;
