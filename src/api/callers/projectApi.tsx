import ApiCaller from "./apiCaller.tsx";

export const callApiGetProjects = (accessToken: string, page: number) => {
    return new ApiCaller()
        .setUrl(`/projects?page=${page}`)
        .setHeaders({
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        })
        .get();
}

export const callApiGetProjectDetail = (data: {
    accessToken: string,
    uuid: string,
}) => {
    return new ApiCaller()
        .setUrl(`/projects/${data.uuid}`)
        .setHeaders({
            headers: {
                Authorization: 'Bearer ' + data.accessToken
            }
        })
        .get();
}
