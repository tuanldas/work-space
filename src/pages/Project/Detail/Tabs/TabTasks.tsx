import clsx from 'clsx';

const TabTasks = ({tabId, isActive}) => {
    return (
        <div id={tabId} className={clsx(
            {'hidden': !isActive}
        )}>
            TabTasks
        </div>
    );
};

export default TabTasks;
