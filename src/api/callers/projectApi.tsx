import ApiCaller from "./apiCaller.tsx";

export const callApiGetProjects = (page: number) => {
    return new ApiCaller()
        .setUrl(`/projects?page=${page}`)
        .useAccessToken()
        .get();
}

export const callApiGetProjectDetail = (data: {
    accessToken: string,
    uuid: string,
}) => {
    return new ApiCaller()
        .setUrl(`/projects/${data.uuid}`)
        .useAccessToken()
        .get();
}
