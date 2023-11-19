import {axiClient} from "@/utils/globalAxios";
import {URLCONST} from "@/constants/APIconst";
export const getLocations = ()=>{
    return axiClient.get(URLCONST.STUDY_LOCATIONS)
        .then(res=> res.data)
}