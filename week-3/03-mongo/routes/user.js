const { Router } = require("express");
const router = Router();
const {User}=  require('../db/index.js')
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', (req, res) => {
    const {username , password} = req.body
    if(!username || !password) {
        throw new Error("User doesnt exist")
    }
    const user= User.findOne({username})
    if(user) throw new Error("the user already exists")
const newUser  = User.create({
    username,
    password
})
return res.status(200).json({
    message: "User created successfully",
})

    // Implement user signup logic
});

router.get('/courses', async (req, res) => {
const response= await Course.find({})
return res.status(200).json({
    message: "Courses fetched successfully",
    courses: courses
    })
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router