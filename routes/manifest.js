/*
manifest.js
<li>create an offer</li>
<li>market</li>
<li>login</li>
<li>home</li>
<li>dashboard</li>
*/

var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/', (req, res) => {
res.render('home');
});

router.get('/dashboard', isLoggedIn, (req, res) => {
res.render('dashboard');
});

router.get('/market', isLoggedIn, async (req, res) => {

let sql = await sql("SELECT * FROM offers LIMIT 20, 20");
});
