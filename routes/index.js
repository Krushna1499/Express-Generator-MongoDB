var express = require('express');
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get('/', function(req, res) {
  req.session.ban = true;            //session created here and if we want to run it shows hello session 
  res.render('index');
});
router.get('/checkban',function (req,res) {
  if(req.session.ban === true)
    {                                                  //we run req session in any route
      res.send("bhai ban hogaye..You are banned");
    }
    else
    {
        res.send("not banned.!");
    }                                          
 
});
router.get("/removeban",function(req,res)
{
  req.session.destroy(function(err){
    if(err) throw err;
  console.log(err);
  res.send("ban removed");
})
});


router.get("/create", async function(req,res)  //async to handle promise 
// when we await in any creation file that we need async for the parent function
{
 const createuser = await userModel.create(   //by using await we can run the code first
    {
      username: "krishna",
      age:25,
      name:"krishna"
    });
    res.send(createuser);
})

router.get("/alluser", async function(req,res)
{
  let alluser = await userModel.find();               //if we want read the user data that we need to find or read // if we want find just one user the findone()
  res.send(alluser);
})

router.get("/oneuser", async function(req,res)
{
  let oneuser = await userModel.findOne({username:"krishna"});    // in this routing we just find one user in he data
  res.send(oneuser)
});
router.get("/delete", async function(req,res)  //delete user 
{
  let deletedUser = await userModel.findOneAndDelete({
  username:"krishna",
  
});
// console.log(deletedUser);        it print null in console and on localhost we just seen white blanck screen
  res.send(deletedUser)
});
module.exports = router;
