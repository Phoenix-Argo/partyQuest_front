import {axiClient, axiValid} from "@/utils/globalAxios";
import {URLCONST} from "@/constants/APIconst";
export const getLocations = ()=>{
    return axiClient.get(URLCONST.STUDY_LOCATIONS)
        .then(res=> res.data)
}

export const getStudies = async (sort) => {
    return await axiValid.get(URLCONST.STUDY_LIST+`?sort=${sort}`)
        .then(res => {
            console.log(res.data)
            return res.data;
        })
};