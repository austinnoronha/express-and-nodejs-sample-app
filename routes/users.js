var express = require('express');
var router = express.Router();

// In-memory user data store
const users = [
  // default user
  {
    "id": "UID00001",
    "fullname": "Default User"
  }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

/* GET user by param email and respond with a HTML. */
router.get('/display/:email', function(req, res, next) {
  res.send(`Hello, My name is ${req.params.email}, good to see you!`);
});

/* GET user. */
router.get('/:id', function(req, res, next) {
  const user = users.filter((d,i) => d.id === req.params.id)
  if(user.length > 0)
    res.json(user);
  else
    res.status(404).send({});
});

/* POST create a new user. */
router.post('/', function(req, res, next) {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
});

module.exports = router;
