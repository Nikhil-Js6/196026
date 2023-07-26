const { default: axios } = require('axios');

const router = require('express').Router();

router.get('/', async (req, res) => {
    var numbers = [];
    for (let i = 0; i < req.query.url.length; i++) {
        try {
            const response = await axios.get(req.query.url[i]);
            const arr = response.data.numbers;
            
            if (arr.length > 0) {
                // Filtering duplicate values: 
                
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
    //  Sorting the number in ascending order:
    
    for (let i = 0; i < numbers.length; i++) {     
        for (let j = i + 1; j < numbers.length; j++) {     
            if (numbers[i] > numbers[j]) {    
               temp = numbers[i];    
               numbers[i] = numbers[j];    
               numbers[j] = temp;    
            }     
        }     
    }    

    res.json({numbers});
});

module.exports = router;
