import {axiClient, axiValid} from "@/utils/globalAxios";
import {URLCONST} from "@/constants/APIconst";

const SMALL_CATE_IDS = 'smallCateIds';
export const getLocations = ()=>{
    return axiClient.get(URLCONST.STUDY_LOCATIONS)
        .then(res=> res.data)
}
