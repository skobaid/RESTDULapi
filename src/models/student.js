//............In this File we will Create Models/Tables/documnets for database studentapi..................//
const mongoose = require("mongoose");
const validator = require("validator");  //For Validation

const studentSchema = new mongoose.Schema(
    {
        name:
        {
            type:String,
            require:true,
            minlength:3,
        },
        email:
        {
            type:String,
            unique:true,
            require:[true, "Emailid Already Present.."],
            validate(value)
            {
                if(!validator.isEmail(value))
                {
                    throw new Error ("Invalid Email Id..!");
                }
            }
        },
        phone:
        {
            type:Number,
            min :10,
            required:true,
            unique:true, 
        },
        address:
        {
            type:String,
            required:true,
        }
    }
)

//WE WILL CREATE A NEW COLLECTION(TABLE)

const Student = new mongoose.model("Student",studentSchema);

module.exports =Student;