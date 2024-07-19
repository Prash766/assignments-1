const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://prash2339:prash2339-0901@cluster0.yhdsetu.mongodb.net/test');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    }
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchaseCourse:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description:String,
    price:Number,
    imageLink: String

    // Schema definition here
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}