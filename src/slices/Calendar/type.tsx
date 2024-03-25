export interface LayoutState {
    message: string | null;
    items: Array<EventType>;
    isFetching: boolean;
}

export interface EventType {
    uuid: string,
    title: string,
    start_date: string,
    end_date: string,
}

export interface GetEventsOptions {
    start_date: string,
    end_date: string,
}
