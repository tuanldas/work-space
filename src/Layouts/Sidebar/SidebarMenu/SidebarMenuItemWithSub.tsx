const SidebarMenuItemWithSub = ({
                                    icon,
                                    title
                                }) => {
    return (
        <>
            <div className="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                <div
                    className="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] pl-[10px] pr-[10px] py-[6px]"
                >
                    {
                        icon ?
                            <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]"><i
                                className={`ki-filled ${icon} text-lg`}></i></span>
                            : null
                    }
                    <span
                        className="menu-title text-sm font-semibold text-gray-700 menu-item-active:text-primary menu-link-hover:!text-primary">{title}</span>
                    <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ml-1 mr-[-10px]">
                        <i className="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
                        <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
                    </span>
                </div>

                <div
                    className="menu-accordion gap-0.5 pl-[10px] relative before:absolute before:left-[20px] before:top-0 before:bottom-0 before:border-l before:border-gray-200">
                    <div className="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                        <div
                            className="menu-link border border-transparent grow cursor-pointer gap-[14px] pl-[10px] pr-[10px] py-[8px]"
                        >
           <span
               className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
           </span>
                            <span
                                className="menu-title text-2sm font-medium mr-1 text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
            Profiles
           </span>
                            <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ml-1 mr-[-10px]">
            <i className="ki-filled ki-plus text-2xs menu-item-show:hidden">
            </i>
            <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex">
            </i>
           </span>
                        </div>
                        <div
                            className="menu-accordion gap-0.5 relative before:absolute before:left-[32px] pl-[22px] before:top-0 before:bottom-0 before:border-l before:border-gray-200">
                            <div className="menu-item">
                                <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] pl-[10px] pr-[10px] py-[8px]"
                                   href="html/demo1/public-profile/profiles/default.html">
             <span
                 className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
             </span>
                                    <span
                                        className="menu-title text-2sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
              Default
             </span>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] pl-[10px] pr-[10px] py-[8px]"
                                   href="html/demo1/public-profile/profiles/creator.html">
             <span
                 className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
             </span>
                                    <span
                                        className="menu-title text-2sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
              Creator
             </span>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] pl-[10px] pr-[10px] py-[8px]"
                                   href="html/demo1/public-profile/profiles/company.html">
             <span
                 className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
             </span>
                                    <span
                                        className="menu-title text-2sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
              Company
             </span>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] pl-[10px] pr-[10px] py-[8px]"
                                   href="html/demo1/public-profile/profiles/nft.html">
             <span
                 className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
             </span>
                                    <span
                                        className="menu-title text-2sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
              NFT
             </span>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] pl-[10px] pr-[10px] py-[8px]"
                                   href="html/demo1/public-profile/profiles/blogger.html">
             <span
                 className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
             </span>
                                    <span
                                        className="menu-title text-2sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
              Blogger
             </span>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] pl-[10px] pr-[10px] py-[8px]"
                                   href="html/demo1/public-profile/profiles/crm.html">
             <span
                 className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
             </span>
                                    <span
                                        className="menu-title text-2sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
              CRM
             </span>
                                </a>
                            </div>
                            <div className="menu-item flex-col-reverse" data-menu-item-toggle="accordion"
                                 data-menu-item-trigger="click">
                                <div
                                    className="menu-link border border-transparent grow cursor-pointer gap-[5px] pl-[10px] pr-[10px] py-[8px]"
                                >
             <span
                 className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
             </span>
                                    <span className="menu-title text-2sm font-medium text-gray-500 dark:text-gray-400">
              <span className="hidden menu-item-show:!flex">
               Show less
              </span>
              <span className="flex menu-item-show:hidden">
               Show 4 more
              </span>
             </span>
                                    <span
                                        className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ml-1 mr-[-10px]">
              <i className="ki-filled ki-plus text-2xs menu-item-show:hidden">
              </i>
              <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex">
              </i>
             </span>
                                </div>
                                <div className="menu-accordion gap-0.5">
                                    <div className="menu-item">
                                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] pl-[10px] pr-[10px] py-[8px]"
                                           href="html/demo1/public-profile/profiles/gamer.html">
               <span
                   className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
               </span>
                                            <span
                                                className="menu-title text-2sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                Gamer
               </span>
                                        </a>
                                    </div>
                                    <div className="menu-item">
                                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] pl-[10px] pr-[10px] py-[8px]"
                                           href="html/demo1/public-profile/profiles/feeds.html">
               <span
                   className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
               </span>
                                            <span
                                                className="menu-title text-2sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                Feeds
               </span>
                                        </a>
                                    </div>
                                    <div className="menu-item">
                                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] pl-[10px] pr-[10px] py-[8px]"
                                           href="html/demo1/public-profile/profiles/plain.html">
               <span
                   className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
               </span>
                                            <span
                                                className="menu-title text-2sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                Plain
               </span>
                                        </a>
                                    </div>
                                    <div className="menu-item">
                                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] pl-[10px] pr-[10px] py-[8px]"
                                           href="html/demo1/public-profile/profiles/modal.html">
               <span
                   className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
               </span>
                                            <span
                                                className="menu-title text-2sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                Modal
               </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                        <div
                            className="menu-link border border-transparent grow cursor-pointer gap-[14px] pl-[10px] pr-[10px] py-[8px]"
                        >
           <span
               className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
           </span>
                            <span
                                className="menu-title text-2sm font-medium mr-1 text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
            Projects
           </span>
                            <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ml-1 mr-[-10px]">
            <i className="ki-filled ki-plus text-2xs menu-item-show:hidden">
            </i>
            <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex">
            </i>
           </span>
                        </div>
                        <div
                            className="menu-accordion gap-0.5 relative before:absolute before:left-[32px] pl-[22px] before:top-0 before:bottom-0 before:border-l before:border-gray-200">
                            <div className="menu-item">
                                <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] pl-[10px] pr-[10px] py-[8px]"
                                   href="html/demo1/public-profile/projects/3-columns.html">
             <span
                 className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
             </span>
                                    <span
                                        className="menu-title text-2sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
              3 Columns
             </span>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] pl-[10px] pr-[10px] py-[8px]"
                                   href="html/demo1/public-profile/projects/2-columns.html">
             <span
                 className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
             </span>
                                    <span
                                        className="menu-title text-2sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
              2 Columns
             </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] pl-[10px] pr-[10px] py-[8px]"
                           href="html/demo1/public-profile/works.html">
           <span
               className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
           </span>
                            <span
                                className="menu-title text-2sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
            Works
           </span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] pl-[10px] pr-[10px] py-[8px]"
                           href="html/demo1/public-profile/teams.html">
           <span
               className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
           </span>
                            <span
                                className="menu-title text-2sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
            Teams
           </span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] pl-[10px] pr-[10px] py-[8px]"
                           href="html/demo1/public-profile/network.html">
           <span
               className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
           </span>
                            <span
                                className="menu-title text-2sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
            Network
           </span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] pl-[10px] pr-[10px] py-[8px]"
                           href="html/demo1/public-profile/activity.html">
           <span
               className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
           </span>
                            <span
                                className="menu-title text-2sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
            Activity
           </span>
                        </a>
                    </div>
                    <div className="menu-item flex-col-reverse" data-menu-item-toggle="accordion"
                         data-menu-item-trigger="click">
                        <div
                            className="menu-link border border-transparent grow cursor-pointer gap-[14px] pl-[10px] pr-[10px] py-[8px]"
                        >
           <span
               className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
           </span>
                            <span className="menu-title text-2sm font-medium text-gray-500 dark:text-gray-400">
            <span className="hidden menu-item-show:!flex">
             Show less
            </span>
            <span className="flex menu-item-show:hidden">
             Show 3 more
            </span>
           </span>
                            <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ml-1 mr-[-10px]">
            <i className="ki-filled ki-plus text-2xs menu-item-show:hidden">
            </i>
            <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex">
            </i>
           </span>
                        </div>
                        <div className="menu-accordion gap-0.5">
                            <div className="menu-item">
                                <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] pl-[10px] pr-[10px] py-[8px]"
                                   href="html/demo1/public-profile/campaigns/card.html">
             <span
                 className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
             </span>
                                    <span
                                        className="menu-title text-2sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
              Campaigns - Card
             </span>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] pl-[10px] pr-[10px] py-[8px]"
                                   href="html/demo1/public-profile/campaigns/list.html">
             <span
                 className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
             </span>
                                    <span
                                        className="menu-title text-2sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
              Campaigns - List
             </span>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] pl-[10px] pr-[10px] py-[8px]"
                                   href="html/demo1/public-profile/empty.html">
             <span
                 className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
             </span>
                                    <span
                                        className="menu-title text-2sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
              Empty
             </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SidebarMenuItemWithSub;
