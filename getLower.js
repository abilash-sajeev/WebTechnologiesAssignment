const express = require('express');
const router = express.Router();
router.post('/', function(req, res){
    if(!req.body.json){
       res.status(400);
       res.json({message: "Bad Request"});
    } else {
       var names = req.body.json.names;
       var address = req.body.json.address;
       var namesLower = [];
       var addressLower = [];
       var response = {};
       names.forEach((value)=>{
         namesLower.push(value.toLowerCase());
       });
       address.forEach((value)=>{
          addressLower.push(value.toLowerCase());
       });
       response = {
          names: namesLower,
          address: addressLower
       };
       console.log(response)
       res.json(response);
    }
 });
 module.exports = router;
