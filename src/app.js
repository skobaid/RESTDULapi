const express = require ("express");  
const app = express();
const port = process.env.port || 8000;

require("./db/conn");                                     //Here We Import Connection file in our express app.js
const Student = require("./models/student");              //here we import students model from student.js\
const StudentRouter = require("./routers/student");       //Here We import Router From router/student.js

app.use(express.json());  
app.use(StudentRouter);

app.listen(port,()=>{
  console.log(`Connection Setup at Port ${port}`);
})









// import {PORT} from './config/variables'
// import cors from 'cors'
// import http from 'http'
// // import { Server } from 'socket.io';
// import socketIO from 'socket.io';
// // import './config/sockets'





// const server = http.createServer(app)
// const io = socketIO(server, {
//   transports:['polling'],
//   cors:{
//     cors: {
//       origin: "http://localhost:3000"
//     }
//   }
// })

// io.on('connection', (socket) => {
//   console.log('A user is connected');

//   socket.on('message', (message) => {
//     console.log(`message from ${socket.id} : ${message}`);
//   })

//   socket.on('disconnect', () => {
//     console.log(`socket ${socket.id} disconnected`);
//   })
// })

// export {io};


// app.use(express.json())
// app.use(cors())
// app.use('/orders', StudentRouter)

// app.get('/', (req,res) => {
//   res.send('Hello')
// })

// server.listen(PORT, () => {
//   console.log(`Server up and running on port ${PORT}`);
// })

// // app.get("/",(req,res)=>{                     //route
// //     res.send("Hello From the Other Side...!!");
// // });

// //Creat A New Student...........................
// //Using Promise
// // app.post("/students",(req,res)=>{
// //     console.log(req.body);                      //For Getting Data From PostMan 
// //     const user = new Student(req.body);
    
// //     user.save().then(()=>{                      //for storing data into database
// //         res.status(201).send(user);
// //     }).catch((error)=>{
// //         res.status(400).send(error);
// //     })                             
// //     // res.send("Hello From the Students Side...!");
// // });
// //===============================Create New Router===================================//

// //We Need to register our router
// app.use(StudentRouter);


// //Using Async Await     (Here We post data into database from Postman)
// app.post("/students",async(req,res)=>{

//     try{
//         console.log(req.body);  
//         const user = new Student(req.body);

//         const createUser = await user.save();
//         res.status(201).send(createUser);  
        
//     }catch(error){res.status(400).send(error);}
    
// });

// //Get All Data 
// app.get("/students",async(req,res)=>{

//     try{
//         const Student_Data= await Student.find();
//         res.send(Student_Data);
//     }catch(ERR){res.render(ERR);}
// });

// //Get Individual student Data Using ID  (By Using Name)
// app.get("/students/:name",async(req,res)=>{

//     try{
//         const name = req.params.name;
//         const studentData= await Student.find({ name:name });
//         console.log(studentData);
      
//          res.send(studentData);
        
        
//     }catch(e){res.status(500).send(e);}
// });

// //==================Put Patch Request Handling (Update Query)==============================//
// app.patch("/students/:id",async(req,res)=>{
//     try{
//         const _id = req.params.id;
//         const updateStudents = await Student.findByIdAndUpdate(_id,req.body);
//         console.log(updateStudents);
//         res.send(updateStudents);
//     }catch(er){res.status(400).send(er);}
// })

// //============How To Delete Students Record==============================//

// app.delete("/students/:id", async(req,res)=>{
//     try{
//         const _id = req.params.id;
//         const deleteStudent = await Student.findByIdAndDelete({_id});
//         console.log(deleteStudent);
//         res.send(deleteStudent);
//     }catch(er){res.status(500).send(er);}
// });








//  express.json() is a method inbuilt in express to recognize the incoming Request Object
//  as a JSON Object. This method is called as a middleware in your application 
//  using the code: app.use(express.json());

// The req. body object allows you to access data in a string or JSON object from the client side.
//  You generally use the req. body object to receive data through POST and PUT......