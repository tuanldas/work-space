import clsx from 'clsx';

const TabOverview = ({tabId, isActive}) => {
    return (
        <>
            <div id={tabId} className={clsx(
                {'hidden': !isActive}
            )}>
                <p>asdf</p>
            </div>
        </>
    );
};
export default TabOverview;
