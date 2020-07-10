const express = require('express');
const router = express.Router();
const { db } = require('../../conf');

router.get('/', (req, res) => {
  // connection à la base de données, et sélection de toutes les données de la table
  db.query(
    'SELECT * FROM people ORDER BY birthday ASC',
    (err, results, fields) => {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      if (err) {
        res.status(500).send('Erreur lors de la récupération des personnages');
        console.log(err.sql);
        console.log(err.message);
        return;
      }
      if (results === 0) {
        res.status(400).send('Erreur pas trouvé');
        return;
      }
      res.json(results);
    }
  );
});

router.post('/signup', function (req, res, next) {
  res.send('I am in POST signup');
});

module.exports = router;
