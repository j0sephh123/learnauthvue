const express = require('express')
const router = express.Router()
const Profile = require('../models/Profile')

// Get all profiles
// router.get('/:id', async(req, res) => {
//   
//   res.json({test: 'test1'})
// })

// The only 2 fields we use
// profileData
// user

// 1. Create a profile

// let lionId = '5b6add4f9f9c6218ccb1d9ec';
// let svenId = '5b6add659f9c6218ccb1d9ef'
// let newProfile = Profile.create({
//   user: lionId,
//   profileData: 'lion profile data'
// // })
// async function a(){
//   let asd = await Profile.find({user: lionId, profileData: 'lion profile data'})
//   console.log(asd);
// }

// a();


// 2. Get all profiles

// 3. Get one profile

// 4. Update profile

// 5. Delete profile


module.exports = router

