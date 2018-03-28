var express = require("express");
var router  = express.Router();
var x = require("../models/registration");

router.get("/", function(req, res){
    res.render("landing");
});
router.get("/users", function(req, res){
    x.find({},function(err,result){
        if(err){
            console.log(err)
        }else{
            console.log(result);
            res.render("userlist",{xyz:result})
        }
    })
});

router.get("/registration", function(req, res){
    res.render("registration",); 
 });
 router.get("/userlist", function(req, res){
    res.render("userlist",); 
 });
 router.post("/registration",function(req,res){
    var user= {
            email:req.body.email,
            password:req.body.psaaword,
            number:req.body.number,
    }
    // var userData = new User(user);
    // userData.save(function(err,result){
    //     if(err){
    //         console.log(err);
    //         res.send({"sucess":"false"})
    //     }else{
    //         console.log(result)
    //         res.send({"sucess":"true"})
    //     }
    // }
    x.create(user, function(err,result){
                if(err){
            console.log(err);
            res.send({"sucess":"false"})
        }else{
            console.log(result)
            res.send({"sucess":"true"})
        }
    })
 });

 router.get("/login", function(req, res){
    res.render("login"); 
 });

module.exports = router;
 
