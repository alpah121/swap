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
let page = req.query.page || "0";
if (!isNaN(parseInt(page)))
	{
	let offset = parseInt(page) * 20;
	let sql = await sql("SELECT * FROM offers LIMIT " + offset + ", 20");
	}
else
	{
	let sql = await sql("SELECT * FROM offers LIMIT 0, 20");
	}
});

router.get('/create', isLoggedIn, (req, res) => {
let profile = await	sql("SELECT * FROM users WHERE id='" + req.session.id + "';");
res.render('createOffer', {"services": profile.services});
});
