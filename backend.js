const express = require("express");
const app = express();
app.listen(3000);
app.use(express.json());

 
let users = [
    { id: 1,
    name: "Arjun"
    },
    {
        id:2,
    name: "Fuckboy"
    },    
    {
        id:3,
        name: "coder"
    }];
 
    const userRouter = express.Router(); 
    const authRouter = express.Router();  // This is how we create mini - app
    app.use('/user', userRouter) ; // This is how we tell the app about our mini app
   app.use('/auth',authRouter) ;

    userRouter
    .route('/')
    .get(getUser)
    .post(postUser)
    .patch(updateUser)
    .delete(deleteUser);
 
 
    userRouter.route('/:id')
    .get(getUserById);

    authRouter.route('/signup')
    .get(getSignUp)                // pass kia middleware
    .post(postSignUp);


 
    function getUser(req,res){
        res.send({ users        });
    };
 
    function postUser(req,res){
        console.log(req.body);
        users = req.body;
        res.json({
            Message : "Data sent sucessfully" ,
               users :req.body      
                 })
 
    };
 
    function updateUser(req,res){
        let a= req.body;
          console.log(req.body);
        for(key in a)
        {
            users("key") = a ["key"];
        }
        res.json({
            Message : "Data updates sucessfully"
        });
    };
 
    function deleteUser(req,res)
    {
        users={};
        res.send("DAta sent successsfully");
    };
 
    function getUserById(req,res){
        console.log(req.params.id);
        let paramId = req.params.id;
        let obj={};
        for(let i=0;i<users.length;i++){
            if(users[i]["id"]==paramId) obj = users[i];
        }
        res.json({
            message:"req received",
            data : obj
 
        });
    };
function getSignUp(req,res){
    res.sendFile('index.html',{root:__dirname});
};

function postSignUp(req,res)
{
    let obj = req.body;
    console.log('backend',obj);                

    res.json({
        message : "usr signed up",
        data : obj
    });

};