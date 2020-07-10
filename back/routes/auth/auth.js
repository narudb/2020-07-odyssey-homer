const express = require('express');
const router = express.Router();
const { db } = require('../../conf');

// router.post('/signup', (req, res) => {
//   res.send('I am in POST signup');
// });

router.post('/signup', (req, res) => {
  const user = req.body;
  db.query('INSERT INTO users SET ?', user, (errReq, resReq) => {
    if (errReq) {
      console.log('----');
      console.log(errReq.sql);
      console.error(errReq.message);
      return res.sendStatus(500);
    }
    return res.status(200).send({});
  });
});

module.exports = router;
