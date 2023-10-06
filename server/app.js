const express = require('express')
const multer = require('multer')

const app = express()
const upload = multer()
const port = 5173

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
	next();
});

app.get('/', (req, res) => {
	res.sendFile('C:/Users/User206/Desktop/l1/client/index.html');
});

app.post('/upload', upload.single(), (req, res) => {
	const formData = req.body;
	console.log(formData);
	res.send('Данные получены');
});



app.listen(port, () => {
	console.log('сервер запущен...')
})