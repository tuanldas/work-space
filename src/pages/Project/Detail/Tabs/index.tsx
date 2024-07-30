const ProjectDetailTabs = () => {

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
        </>
    );
};

export default ProjectDetailTabs;
