import clsx from 'clsx';
import {Link} from 'react-router-dom';
import {toAbsoluteUrl} from '../../../../helpers/AssetHelpers.ts';
import {useEffect} from 'react';
import {KTTooltip} from '../../../../metronic/core';

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
                    <div className="card mb-6 xl:mb-9">
                        <div className="card-body">
                            <div className="flex justify-between items-center mb-3">
                                <div className="badge px-1.5">UI Design</div>
                            </div>
                            <div className="mb-2">
                                <Link to={'#'} className="text-base font-medium mb-1 text-gray-900 hover:text-primary">Meeting
                                    with customer</Link>
                            </div>
                            <div className="text-sm leading-[normal] font-medium text-gray-600 mb-5">
                                First, a disclaimer – the entire process writing a blog post often takes a couple of
                                hours if you can type
                            </div>
                            <div className="flex justify-between items-center flex-wrap">
                                <div className="flex flex-wrap items-center ml-[10px] my-1">
                                    <div
                                        className="cursor-pointer flex-shrink-0 inline-block rounded-full relative z-0 ml-[-10px] transition-all duration-300 ease-[ease] hover:z-1"
                                        data-tooltip="#tooltip_user">
                                        <img alt="Pic" className="w-[35px] h-[35px] rounded-full"
                                             src={toAbsoluteUrl('media/avatars/300-2.png')}/>
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
        </div>
    );
};

export default TabTasks;
