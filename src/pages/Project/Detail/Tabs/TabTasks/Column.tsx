import Task from './Task.tsx';
import {SortableContext, verticalListSortingStrategy} from '@dnd-kit/sortable';
import {useDroppable} from '@dnd-kit/core';

const Column = ({id, items}) => {
    const {setNodeRef} = useDroppable({
        id: id
    });

    return (
        <>
            <SortableContext
                id={id}
                items={items}
                strategy={verticalListSortingStrategy}
            >
                <div className="w-[450px] h-lvh" ref={setNodeRef}>
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
                    {items.map((id) => (
                        <Task taskId={id} key={id}/>
                    ))}
                </div>
            </SortableContext>¬
        </>
    );
};
export default Column;
