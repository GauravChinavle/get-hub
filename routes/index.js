var express = require('express');
var router = express.Router();
const { fetchApi, extractApi } = require("../services")

router.post('/getData', async (req, res, next)=>{
    try {
        const filteredData = await fetchApi(req.body);
        const extractedData = await extractApi(req.body, filteredData);
        res.send(extractedData);
    } catch (e){
        console.log(e.message);
        res.status(400).send({
            message: "Something went wrong!"
        })
    }
   
});

module.exports = router;
