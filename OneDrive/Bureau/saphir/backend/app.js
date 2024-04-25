const express = require('express');
const session = require('express-session');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();

// Configuration de dotenv pour charger les variables d'environnement depuis un fichier .env
dotenv.config();
app.set('view engine', 'pug');

// Create a connection pool to the MySQL server using environment variables
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

// Middleware pour analyser les données du corps des requêtes
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware pour servir des fichiers statiques depuis le dossier "public"
app.use(express.static('public'));

// Middleware pour configurer les sessions
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}));

// Route to fetch users from the database
app.get('/users', (req, res) => {
  pool.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results);
  });
});

// Port d'écoute du serveur
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
