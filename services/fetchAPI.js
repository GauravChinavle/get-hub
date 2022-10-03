const dummyData = require("../data");
const _ = require('lodash');

function filterInput(whereItem = {}, apiName) {
    const statusArray = ["greaterThan", "lessThan", "greaterThanEqualTo", "lessThanEqualTo"];

    const compare = {
        "greaterThan": _.gt(),
        "lessThan": _.lt(),
        "greaterThanEqualTo": _.gte(),
        "lessThanEqualTo": _.lte()
    }   


    if (Object.keys(compare).includes(whereItem["operator"])) {
        return dummyData[apiName].filter((item) => compare[whereItem["operator"]](item[whereItem["key"]], whereItem["value"]));
    }

    return dummyData[apiName].filter((item) => _.isEqual(item[whereItem["key"]], whereItem["value"]));
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