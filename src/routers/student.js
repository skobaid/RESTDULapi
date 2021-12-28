const express = require("express");
const router = new express.Router();
const Student = require("../models/student");           //Here We import student model from models/student.js

// app.get("/",(req,res)=>{                     //route
//     res.send("Hello From the Other Side...!!");
// });

//Creat A New Student...........................
//Using Promise
// app.post("/students",(req,res)=>{
//     console.log(req.body);                      //For Getting Data From PostMan 
//     const user = new Student(req.body);
    
//     user.save().then(()=>{                      //for storing data into database
//         res.status(201).send(user);
//     }).catch((error)=>{
//         res.status(400).send(error);
//     })                             
//     // res.send("Hello From the Students Side...!");
// });



//Using Async Await     (Here We post data into database from Postman)
router.post("/students",async(req,res)=>{

    try{
        console.log(req.body);  
        const user = new Student(req.body);

        const createUser = await user.save();
        res.status(201).send(createUser);  
        
    }catch(error){res.status(400).send(error);}
    
});

//Get All Data 
router.get("/students",async(req,res)=>{

    try{
        const Student_Data= await Student.find();
        res.send(Student_Data);
    }catch(ERR){res.render(ERR);}
});

//Get Individual student Data Using ID  (By Using Name)
router.get("/students/:name",async(req,res)=>{

    try{
        const name = req.params.name;
        const studentData= await Student.find({ name:name });
        console.log(studentData);
      
         res.send(studentData);
        
        
    }catch(e){res.status(500).send(e);}
});

//==================Put Patch Request Handling (Update Query)==============================//
router.patch("/students/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id,req.body);
        console.log(updateStudents);
        res.send(updateStudents);
    }catch(er){res.status(400).send(er);}
})

//============How To Delete Students Record==============================//

router.delete("/students/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete({_id});
        console.log(deleteStudent);
        res.send(deleteStudent);
    }catch(er){res.status(500).send(er);}
});



module.exports = router;