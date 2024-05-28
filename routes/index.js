var express = require('express');
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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
module.exports = router;
