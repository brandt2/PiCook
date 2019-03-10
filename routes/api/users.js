const express = require("express");
const router = express.Router();
const User = require("../../models/User");

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({ email: "A user has already registered with this email address"})
      } else {
        const newUser = new User({
          username: req.user.username,
          email: req.body.email,
          password: req.body.password,
          fname: req.body.fname,
          lname: req.body.lname
        })

        newUser.save().then(user => res.send(user)).catch(err => res.send(err));
      }
    })
})

module.exports = router;