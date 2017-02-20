var num_invokes = 1

const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db.sqlite');
db.serialize();
function testfunc(req, res, next) {
	console.log('[routing]: test function! (invoked %d times)', num_invokes)
	num_invokes++
	let oResTestResponse = {
		number: num_invokes,
		message: '_(:з」∠)_'
	}
	res.send(oResTestResponse)
}

function sendfunc(req, res, next) {
	console.log('[routing]: test send')
	console.log(req.body)
	res.send({message: '_(:з」∠)_'})
}


function logIn(req,res,next) {
	if (req.session.userName !== undefined) {
		res.redirect('/');
		return;
	}
	var uID = 123123123123;
	var username = req.body.userName;
	var password = req.body.password;
	var status = 'fucker';
	db.run('INSERT INTO User(uID, userName, password, status) VALUES(?, ? ,?, ?))',
		[uID, username, password, status], function (err) {
			res.send('failed login');
		});
	req.session.userName = username;
	console.log("add successfully");
	res.send('Success')
}


function setup(app) {
	app.get('/test_api', testfunc)
	app.post('/test_send', sendfunc)

	app.get('/main', testfunc)

	app.get('/signup', logIn)
	// app.get('/profile/products', testfunc)

	// app.get('/product', testfunc)
	// app.get('/product/histree', testfunc)
	// app.get('/product/ancestors', testfunc)
	// app.get('/product/siblings', testfunc)
	// app.get('/product/descendants', testfunc)

	// /* 'histree' denotes history + tree */
	// app.get('/histree', testfunc)

}

module.exports = {
	setup: (app) => setup(app)
};
