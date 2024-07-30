import clsx from 'clsx';

const TabOverview = ({tabId, isActive}) => {
    return (
        <>
            <div id={tabId} className={clsx(
                {'hidden': !isActive}
            )}>
            </div>
        </>
    );
};
export default TabOverview;
