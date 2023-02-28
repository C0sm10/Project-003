const E = require ('express')
const P = require ('path')
const pug = require ('pug')
const A = E()

A.set('view engine','pug')
A.set('views', P.join(__dirname,'./pub/views'))
A.use(E.static('pub'))
A.use(E.static('node_modules/bootstrap/dist/'))

A.listen(3000,()=>{
	console.log('Uygulama çalıştı.Port 3000')
})

A.get('/new',(req,res)=>{   res.render('create')})
A.get('/about',(req,res)=>{	res.render('about')})
A.get('/contact',(req,res)=>{	res.render('contact')})
A.get('/post',(req,res)=>{	res.render('post')})
A.get('/',(req,res)=>{	res.render('index')})
