import {axiClient, axiValid} from "@/utils/globalAxios";
import {URLCONST} from "@/constants/APIconst";

export const getLocations = ()=>{
    return axiClient.get(URLCONST.STUDY_LOCATIONS)
        .then(res=> res.data)
}

export const getStudies = async (sort) => {
    return await axiValid.get(URLCONST.STUDY_LIST+`?sort=${sort}`)
        .then(res => {
            console.log(res.data);
            return res.data;
        })
};
/**
 * accordion navbar와 서치 인풋에서 필터 조건에 맞는
 * 요청 URL을 보내서 모두 사용한다.
 * @param params : Object /search?middleCate=val?smallcates=val?page=val...
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const searchStudy = async(params)=>{
    let smallCates = Array.from(params['smallCateIds']);
    params['smallCateIds'] = smallCates !== null ? smallCates.join('&smallCateIds'): null;
    return await axiClient.get(URLCONST.STUDY_SEARCH_URL,{
        params:params,
    }
    )
        .then(res=>{
            console.log(res.data);
            return res.data;
        })
};