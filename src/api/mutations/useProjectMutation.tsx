import {useMutation} from "react-query";
import {callApiGetProjects} from "../callers/projectApi.tsx";
import {useSelector} from "react-redux";
import {selectAuthSlice} from "../../store/authSlice/selector.tsx";

const useProjectMutation = () => {
    const authData = useSelector(selectAuthSlice);

    const fetchProjects = useMutation({
        mutationFn: async () => {
            return await callApiGetProjects(authData.accessToken);
        }
    });
    return {fetchProjects};
}

export default useProjectMutation;
