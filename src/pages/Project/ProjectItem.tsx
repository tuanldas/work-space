import {Link} from 'react-router-dom';
import {toAbsoluteUrl} from '../../helpers/AssetHelpers.ts';

const ProjectItem = ({
                         project
                     }) => {

    return (
        <>
            <div className="card p-7.5">
                <div className="flex items-center justify-between mb-3 lg:mb-6">
                    <div className="flex items-center justify-center size-[50px] rounded-lg bg-gray-100">
                        <img alt="" className="" src={'media/brand-logos/plurk.svg'}/>
                    </div>
                    <span className="badge badge-primary badge-outline">In Progress</span>
                </div>
                <div className="flex flex-col mb-3 lg:mb-6">
                    <Link className="text-lg font-semibold text-gray-900 hover:text-primary-active mb-px"
                          to={`${project.uuid}`}>
                        {project.name}
                    </Link>
                    <span className="text-sm font-medium text-gray-600">{project.desc}</span>
                </div>
                <div className="flex items-center gap-5 mb-3.5 lg:mb-7">
                    <span className="text-sm font-medium text-gray-500">Due date: &nbsp;<span
                        className="text-sm font-semibold text-gray-700">{project.due_date}</span></span>
                </div>
                <div className="flex -space-x-2">
                    <div className="flex">
                        {
                            project.users.map((user, index) => (
                                user.avatar
                                    ? <img
                                        key={index}
                                        className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                                        src={user.avatar} alt={''}/>
                                    : <img
                                        key={index}
                                        className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                                        src={toAbsoluteUrl('media/avatars/blank.png')} alt={'asdf'}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};
export default ProjectItem;
