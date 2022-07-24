const dummyData = require("../data");
const fetchApi = async (data) => {
    const result = {};
    Object.keys(data).map((apiName)=>{   
        if(dummyData[apiName] && data[apiName].where) {
            data[apiName].where.map((whereItem)=>{
                if(whereItem["operator"] == "greaterThan") {                    
                    result[apiName] = dummyData[apiName].filter((item)=> item[whereItem["key"]] > whereItem["value"] )
                } else if(whereItem["operator"] == "lessThan") {
                    result[apiName] = dummyData[apiName].filter((item)=> item[whereItem["key"]] < whereItem["value"] )
                } else if(whereItem["operator"] == "greaterThanEqualTo") {
                    result[apiName] = dummyData[apiName].filter((item)=> item[whereItem["key"]] >= whereItem["value"] )
                } else if(whereItem["operator"] == "lessThanEqualTo") {
                    result[apiName] = dummyData[apiName].filter((item)=> item[whereItem["key"]] <= whereItem["value"] )
                } else {
                    result[apiName] = dummyData[apiName].filter((item)=> item[whereItem["key"]] === whereItem["value"] )
                }

            });
        } else if (dummyData[apiName]) {
            result[apiName] = dummyData[apiName];
        } else {
            result[apiName] = "API not found"
        }
    })
    return result
}


module.exports = fetchApi ;