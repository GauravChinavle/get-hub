const dummyData = require("../data");

function filterInput(whereItem = {}, apiName) {
    const result = {};
    const statusArray = ["greaterThan", "lessThan", "greaterThanEqualTo", "lessThanEqualTo"];

    if (statusArray.includes(whereItem["operator"])) {
        return dummyData[apiName].filter((item) => item[whereItem["key"]] > whereItem["value"]);
    }

    return dummyData[apiName].filter((item) => item[whereItem["key"]] === whereItem["value"]);
}


const fetchApi = async (data) => {
    const result = {};
    Object.keys(data).map((apiName) => {
        if (dummyData[apiName] && data[apiName].where && Array.isArray(data[apiName].where)) {
            data[apiName].where.map((whereItem) => {
                result[apiName] = filterInput(whereItem, apiName);
            });
        } else if (dummyData[apiName]) {
            result[apiName] = dummyData[apiName];
        } else {
            result[apiName] = "API not found"
        }
    })
    return result
}


module.exports = fetchApi;