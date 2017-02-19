var num_invokes = 1

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

function setup(app) {
	app.get('/test_api', testfunc)
	app.post('/test_send', sendfunc)

	app.get('/main', testfunc)

	// app.get('/profile', testfunc)
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
}
