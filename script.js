// <----All about node js and Npm usecase----> PART _2
//     <==File system module usage ==>

// const { error } = require("console");
// const fs = require("fs"); //iss line ka matlab h aapne 'fs' module ko nikala h node se or apne iss "const fs" mai move kr liye h

// fs.writeFile("hey.txt", "hey hello ", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// //"node script.js" this is the command to run any node code from terminal , bcoz all this code is running in environment provided by node.js;
// //so we need to run this code in that environment only.
// //so we can do it using "node <file_name>" command in our terminal.
// //here <file_name> is the name of the file which contains our node code. in this

// fs.appendFile("hey.txt", "dont worry you will lit backend ", function(err){ // this will append (add) some more text in the previous data
//     if(err) console.error(err);
//     else console.log("done");
// })

// fs.rename("hey.txt","Hello.txt", function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })

// fs.copyFile("hello.txt", "./copy2/copy.txt", function (error) {
//   //this will throw error bcoz copy2 is not any folder
//   if (error) console.error(error);
//   else console.log("done");
// });

// fs.copyFile("hello.txt", "./copy/copy.txt", function (error) {
//   //this will run properly
//   if (error) console.error(error);
//   else console.log("done");
// });

// fs.unlink("hello.txt",function(error){ // this will remove our hello.txt file
//       if (error) console.error(error);
//       else console.log("Removed");
// })

// fs.rm("./copy", function (error) {
//   // this will remove only empty folder by default because we have not filled option as mentioned in the next code
//   if (error) console.error(error);
//   else console.log("removed our empty folder");
// })

// fs.rm("./copy", { recursive: true }, function (error) {
//   // this will remove folder recursively by default whether it is empty or filled it will remove that folder
//   if (error) console.error(error);
//   else console.log("removed our empty folder");
// })

//<==HTTP PACKAGE usage==>
//below code is about How to create a live server-->
// const http = require('http');
// const server = http.createServer(function(req,res){
//     res.end("hello world");
// })
// server.listen(3000);

//<----NPM BASICS &  Advanced features---->  PART -3
// for installing:- npm install or i Packagename
//for uninstalling:- npm uninstall package name
//for installing package of a particular version :- npm install packagename@version

//<==node module folder==>
//this "node module folder" consists of all the dependencies , depndencies of dependencies and its codes , which we have installed using npm

//<-----EXPRESS js , ROUTING and MIDDLEWARE -----> PART -4

// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
// app.listen(3000)

// app.get(route, request handler {     ---> request handler is a middleware and it is always a function
//     res.send('Hello World')
//   })

//   app.listen(3000)

//<---------------------same piece of code below this to explain how route values changes the page interface on the same port------------->

// const express = require("express")
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.get('/profile', function (req, res) {
//   res.send('routing ho jayega or iska console.log print hoga agr url mai iska route dete h')
// })

// app.listen(3000)

//<--------------done-------------------->

//<++++++ POINT TO BE NOTED +++++++>
// 1. we can use route values to change the page interface on the same port
// 2. jb hm ek server ko chala dete h wo khud ba khud restart nhi hota h . 
//As ex:- agr hm previous code mai "Hello World" k jagah "Holla waarld" kr dete h or browser pe jaake page refresh krte h
// toh bhi koi change nhi dikhega wo purana value hi show krega , qki server khud se restart nhi hota ,
//value change krne k liye pehle hme server off krna hoga after that waapis se run krna hoga fir value change hoga.


// 3. agr hm server creation wale code ek baar run krne k baad comment out bhi kr dete h,
// toh bhi sever chala hi rhega usme change nhi hoga or agr hm manually server off krte h  terminal mai aake toh hi off hoga.


// 4. to escape from this baar baar manual restart of the server we install a package "nodemon".
// nodemon se hm kabhi bhi apne app(server) ko chala skte hai. syntax is "npx nodemon script.js"
//after installing our nodemom package now after changing in res.send("") server will change too after reloading



//<=======same topic======>

// const express = require("express")
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hotiryjla Waarlhfsfbfdbd')  //after installing our nodemom package now after changinf in res.send("") 
//                                         //server will change too after reloading
// })

// app.get('/profile', function (req, res) {
//   res.send('routing ho jayega or iska console.log print hoga agr url mai iskafhfbb db zdc route dete h')
// })

// app.listen(3000)
//<======topic======>


//<-------------====Middleware====------------>

// middleware route k pehle ka ek concept h ,
// jaha pe hm chahte h ki hmara request server pe jaane k baad or route tk pahuchne se pehle koi kaam ho
// waha pe role mai aata h ek element middleware.

// **middle ware ko use krne k 2 ways h :-

// 1st way--> app.use(Function(req,res,next){}) ko app.get k pehle chalao 

// const express = require("express")
// const app = express()

// app.use(function(req,res,next){
//     console.log("middle ware ka code hai ye jo ki hmesha app.get se pehle likha hona chahiye");
//     next();  // ye hmare request ko aage forward kr deta h
// })

// app.use(function(req,res,next){
//     console.log(" ye bhi middle ka code hai ye jo ki hmesha app.get se pehle likha hona chahiye");
//     next();  // ye hmare request ko aage forward kr deta h
// })

// app.get('/', function (req, res) {
//   res.send('Hello world')  //after installing our nodemom package now after changinf in res.send("") 
//                                         //server will change too after reloading
// })

// app.get('/profile', function (req, res) {
//   res.send('routing ho jayega or ')
// })

// app.listen(3000)

//<=========1st way of middle ware use done============>




//<*************** ERROR HANDLING****************>

// const express = require("express")
// const app = express()

// app.use(function(req,res,next){
//     console.log("middle ware ka code hai ye jo ki hmesha app.get se pehle likha hona chahiye");
//     next();  // ye hmare request ko aage forward kr deta h
// })

// app.use(function(req,res,next){
//     console.log(" ye bhi middle ka code hai ye jo ki hmesha app.get se pehle likha hona chahiye");
//     next();  // ye hmare request ko aage forward kr deta h
// })

// app.get('/', function (req, res) {
//   res.send('Hello world')  //after installing our nodemom package now after changinf in res.send("") 
//                                         //server will change too after reloading
// })

// app.get('/about', function(req,res){
//   res.send("ye hmara about ka page hai")
// })

// app.get('/profile', function (req, res ,next) { //yha pe app.get mai kuch thora sa hange kiye upar waale code se qki hme 
//                                               //iske baad hi error chahiye
//   return next(new Error("Ye part console mai print hoga"))
// })


// //Define error-handling middleware functions in the same way as other middleware functions,
// // except error-handling functions have four arguments instead of three: (err, req, res, next). For example:

// app.use((err, req, res, next) => {   //---------------> code for error handling and this should always be used in the end of that element 
//                                         //jiske baad mai hme error nikalna hai
//   console.error(err.stack)
//   res.status(500).send('Something went wrong! , ye part font end page pe show hoga qki ye response hai')
// })

// app.listen(3000)




//<++++==+========++++    part 5   ++++++=========>

//Cookies and session written in copy
//FORM HANDLING :- setting up parsers for form
// syntax for parsing of forms:
    // app.use(express.json());
    //app.use(express.urlencoded({extended.true}));
    
    //in do middleware lines ko kisi bhi route se pehle likhna prega , so that hmare frontend pe fill kiya hua data ,
    // jo ko server pe unreadable format mai jayega use hmara server read kr ske in 2 lines k help se
    

//<+++++++========    part 6    EJS , DYNAMIC ROUTING ++++++++++++=====>
// const express = require("express");
// const app= express();

// const path=require("path");

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

// app.set('view engine', "ejs");

// // app.get("/", (req,res) => {  // ----> syntax for rendering something or some frontend techology like ejs or html on particukar route .
// //      res.render("index");
// // });

// app.get("/", (req,res) => {   //----> syntax for normal routing 
//          res.send("this is normal routing syntax , after learning dynamic routing , we will do a project");
// });


// app.get("/profile/:username", (req,res) => {   //----> syntax for dynamic routing, notes in the textbook. to make any part dynamic  we use ":" in that route part.

//         res.send(`welcome to profile route ${req.params.username}`);
// });

// app.listen(3000,function(){
//     console.log("yeahh this is running");
// });



//<+++++++========    part 7    Env , Environment variable+++++++++++=====>

    require('dotenv').config(); // used when we don't want to hard code our database credentials in our code or when we want to set 
    //something as a machine dependent then we put that variable in the .env file and variable name should be in all capital Letters, so we use env file to store them.

    const express = require("express");
    const app= express();
    
    const path=require("path");
    
    const port = 3000;
    
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    
    app.set('view engine', "ejs");
    
    // app.get("/", (req,res) => {  // ----> syntax for rendering something or some frontend techology like ejs or html on particukar route .
    //      res.render("index");
    // });
    
    app.get("/", (req,res) => {   //----> syntax for normal routing 
             res.send("this is normal routing syntax , after learning dynamic routing , we will do a project");
    });
    
    
    app.get("/profile/:username", (req,res) => {   //----> syntax for dynamic routing, notes in the textbook. to make any part dynamic  we use ":" in that route part.
    
            res.send(`welcome to profile route ${req.params.username}`);
    });
    
    app.listen(process.env.PORT,function(){ //for produnction we use process.env.PORT instead of 3000

        console.log("yeahh this is running");
    });

