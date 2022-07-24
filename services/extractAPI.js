const extractApi = async (reqBody, data) => {
    let result = {};
    Object.keys(reqBody).map((apiName)=>{
        if(reqBody[apiName]["fields"]) {
            result[apiName] = []
            data[apiName].map((item,index)=>{
                result[apiName][index] = {}
                reqBody[apiName]["fields"].map((field)=>{
                    result[apiName][index][field] = item[field]
                })
            })
        } else {
            result[apiName] = data[apiName]
        }
    })
    return result
}

module.exports = extractApi;