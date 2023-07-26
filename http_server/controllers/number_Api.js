const { default: axios } = require('axios');

const router = require('express').Router();

router.get('/', async (req, res) => {
    var numbers = [];
    for (let i = 0; i < req.query.url.length; i++) {
        try {
            const response = await axios.get(req.query.url[i]);
            const arr = response.data.numbers;
            
            if (arr.length > 0) {
                for (let i = 0; i < arr.length; i++) {
                    if (!numbers.includes(arr[i])) {
                        numbers.push(arr[i]);
                    }
                }
            }
        } 
        catch (err) {
            if (err.errno == -4078){
                i++;
            };
        }
    }
    numbers.sort((a, b) => { return a - b });

    res.json({numbers});
});

module.exports = router;
