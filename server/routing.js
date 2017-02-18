var num_invokes = 1

function testfunc(req, res, next) {
	console.log('[routing]: test function! (invoked %d times)', num_invokes)
	num_invokes++
	res.send('_(:з」∠)_')
}

function test_json(req, res, next) {
	res.send({
		test: 'aye!'
	})
}

function setup(app) {
	// app.get('/', testfunc)
	app.get('/main', testfunc)

	app.get('/profile', test_json)
	app.get('/profile/products', testfunc)

	app.get('/product', testfunc)
	app.get('/product/histree', testfunc)
	app.get('/product/ancestors', testfunc)
	app.get('/product/siblings', testfunc)
	app.get('/product/descendants', testfunc)

	/* 'histree' denotes history + tree */
	app.get('/histree', testfunc)

}

module.exports = {
	setup: (app) => setup(app)
}
