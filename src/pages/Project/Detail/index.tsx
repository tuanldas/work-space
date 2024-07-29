import {toAbsoluteUrl} from '../../../helpers/AssetHelpers.ts';

const ProjectDetail = () => {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="flex justify-center items-center flex-shrink-0 bg-secondary rounded h-[100px] lg:w-[150px] lg:h-[150px] me-7 mb-4">
                        <img className='max-w-[50px] lg:max-w-[75px] w-[100px]' src={toAbsoluteUrl('media/brand-logos/airbnb-2.svg')} alt={'#'}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetail;
