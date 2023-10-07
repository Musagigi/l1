const express = require('express')
const multer = require('multer')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()
const upload = multer()
const port = 3000

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
	next();
});

app.use(bodyParser.json())

app.get('/', (req, res) => {
	res.sendFile('/client/index.html');
});

app.post('/upload', upload.single(), (req, res) => {
	const formData = req.body;
	const data = JSON.stringify(formData)
	console.log(formData);

	fs.appendFile('./test.txt', data, (err) => {
		if (err) {
			console.error(err)
			res.send('Ошибка при сохранении данных в файл')
			return
		}
		res.send('Данные успешно сохранены в файл')
	})
});

app.listen(port, () => {
	console.log('сервер запущен...')
})