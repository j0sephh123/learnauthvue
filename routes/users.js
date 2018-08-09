const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const User = require('../models/User');

router.post('/register', (req, res) => {
  // req.body.name = 'lion';
  // req.body.password = 'lion';

  User.findOne({ name: req.body.name }).then(user => {
    if (user) {
      console.log('User already exists');
      return res.status(400).json({msg: 'User already exists'});
    } else {

      const newUser = new User({
        name: req.body.name,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
}); // seems to work

router.post('/login', (req, res) => {

  const name = req.body.name;
  const password = req.body.password;

  // Find user by name
  User.findOne({ name }).then(user => {
    // Check for user
    if (!user) {
      return res.status(404).json({msg: 'User not found'});
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = { id: user.id, name: user.name }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          'secret',
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              user,
              success: true,
              token: 'Bearer ' + token
            });
          }
        );
      } else {
        return res.status(400).json({msg: 'Password incorrect'});
      }
    });
  });
}); // seems to work





// havent tested this one yet
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email
  });
});

module.exports = router;