const express = require('express');
const router = express.Router();
const { db } = require('../../conf');

// router.post('/signup', (req, res) => {
//   res.send('I am in POST signup');
// });

router.post('/signup', (req, res) => {
  db.query('INSERT INTO users SET ?', req.body, (errReq, results) => {
    if (errReq) {
      return res.sendStatus(500);
    }
    return res.status(200).send({});
  });
});

module.exports = router;
