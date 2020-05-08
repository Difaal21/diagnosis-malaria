const express = require('express');
const router = express.Router();

router.get("/", (res, req) => {
    req.render('index', ([title = 'Index']))
});

router.get("/diagnosa", (res, req) => {
    req.render('diagnosis'), ([title = 'Diagnosa Jenis Malaria'])
});

router.post("/diagnosa", (res, req) => {
    console.log(res.body)
});

module.exports = router;