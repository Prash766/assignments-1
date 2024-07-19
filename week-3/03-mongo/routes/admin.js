const { Router } = require("express");
const adminMiddleware = require("../middleware/admin.js");
const { Admin,Course } = require("../db/index.js");
const  router = Router();


// Admin Routes
router.post('/signup',async (req, res) => {
    const username = req.body.username
    const password = req.body.password
const user  = await Admin.findOne({
    username
})
if(!user){
    const admin = await Admin.create({
        username:username,
        password:password
    
})
res.json({
    msg:"User signed up"
})
    // Implement admin signup logic
}
else{
    res.json({
        msg:"user already exist"
    })
}

})

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const {title , description, imageLink, price}= req.body
  const course =  await Course.create({
        title,
        description,
        imageLink,
        price
        })
        console.log(course)
        return res.status(201).json({
            msg:"Course created successfully",
            courseid: course._id
        })

});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;