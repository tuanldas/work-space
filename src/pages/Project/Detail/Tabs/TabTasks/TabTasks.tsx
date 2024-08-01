import clsx from 'clsx';
import {useEffect, useState} from 'react';
import {KTTooltip} from '../../../../../metronic/core';
import Column from './Column.tsx';
import {closestCorners, DndContext, DragOverlay} from '@dnd-kit/core';
import {arrayMove} from '@dnd-kit/sortable';
import Task from './Task.tsx';

const TabTasks = ({tabId, isActive}) => {
    useEffect(() => {
        KTTooltip.createInstances();
    }, []);
    const [activeId, setActiveId] = useState();
    const [items, setItems] = useState({
        root: ['1', '2', '3'],
        container1: ['4', '5', '6'],
        container2: ['7', '8', '9'],
        container3: ['10']
    });

    function handleDragStart(event) {
        const {active} = event;
        const {id} = active;

        setActiveId(id);
    }


    function findContainer(id) {
        if (id in items) {
            return id;
        }

        return Object.keys(items).find((key) => items[key].includes(id));
    }

    function handleDragOver(event) {
        const {active, over, draggingRect} = event;
        const {id} = active;
        const {id: overId} = over;

        // Find the containers
        const activeContainer = findContainer(id);
        const overContainer = findContainer(overId);

        if (
            !activeContainer ||
            !overContainer ||
            activeContainer === overContainer
        ) {
            return;
        }

        setItems((prev) => {
            const activeItems = prev[activeContainer];
            const overItems = prev[overContainer];

            // Find the indexes for the items
            const activeIndex = activeItems.indexOf(id);
            const overIndex = overItems.indexOf(overId);

            let newIndex;
            if (overId in prev) {
                // We're at the root droppable of a container
                newIndex = overItems.length + 1;
            } else {
                const isBelowLastItem =
                    over &&
                    overIndex === overItems.length - 1 &&
                    draggingRect != undefined &&
                    draggingRect.offsetTop > over.rect.offsetTop + over.rect.height;

                const modifier = isBelowLastItem ? 1 : 0;

                newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
            }

            return {
                ...prev,
                [activeContainer]: [
                    ...prev[activeContainer].filter((item) => item !== active.id)
                ],
                [overContainer]: [
                    ...prev[overContainer].slice(0, newIndex),
                    items[activeContainer][activeIndex],
                    ...prev[overContainer].slice(newIndex, prev[overContainer].length)
                ]
            };
        });
    }

    function handleDragEnd(event) {
        const {active, over} = event;
        const {id} = active;
        const {id: overId} = over;

        const activeContainer = findContainer(id);
        const overContainer = findContainer(overId);

        if (
            !activeContainer ||
            !overContainer ||
            activeContainer !== overContainer
        ) {
            return;
        }

        const activeIndex = items[activeContainer].indexOf(active.id);
        const overIndex = items[overContainer].indexOf(overId);

        if (activeIndex !== overIndex) {
            setItems((items) => ({
                ...items,
                [overContainer]: arrayMove(items[overContainer], activeIndex, overIndex)
            }));
        }

        setActiveId(null);
    }

    return (
        <div id={tabId} className={clsx(
            {'hidden': !isActive}
        )}>

            <DndContext
                collisionDetection={closestCorners}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDragEnd={handleDragEnd}
            >
                <div className="row gap-9 flex">
                    <Column id={'root'} items={items.root}/>
                    <Column id={'container1'} items={items.container1}/>
                    <Column id={'container2'} items={items.container2}/>
                    <Column id={'container3'} items={items.container3}/>
                    <DragOverlay>{activeId ? <Task taskId={activeId}/> : null}</DragOverlay>
                </div>
            </DndContext>
        </div>
    );
};

export default TabTasks;
