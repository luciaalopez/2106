console.log("hello world!");
const express = require("express")
const app = express()
const port = 1512

app.get('/', (req,res) => {
	res.send('hello world!')
})

app.listen(port, () => {
	console.log("examole app listening at https://math.lucialopez.org:${port}")
})