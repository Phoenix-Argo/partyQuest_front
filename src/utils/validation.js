/*
setup(){
    const required = value => {
        const requiredMessage = '필수 항목을 입력해주시기 바랍니다.'
        if(value === undefined || value == null) return requiredMessage
        if(!String(value).length) requiredMessage
        return true
    }
    const minLength = (number,value)=>{
        if(!String(value).length < number) return '최소'+ number + '글자를 입력해주세요.'
        return true
    }
    const anything = () => {
        return true;
    }

    const validationSchema = {
        name : value => {
            const req = required(value)
            if (req !== true) return req
            const min = minLength(2, value)
            if(min !== true) return min
        },
        password: value => {
            const req = required(value)
            if (req !== true) return req
            const min = minLength(6, value)
            if(min !== true) return min
        }
        email: value => {

        }
    }

}*/
