import axios from "axios";
import {URLCONST} from "@/constants/APIconst";
export const getLocations = ()=>{
    return axios.get(URLCONST.STUDY_LOCATIONS)
        .then(res=> res.data)
}