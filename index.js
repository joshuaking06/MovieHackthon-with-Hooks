require('dotenv').config()
const express = require('express')

const app = express()

app.use(express.static(`${__dirname}/dist`))
app.get('/*', (req,res) => res.sendFile(`${__dirname}/dist/index.html`))

app.listen(process.env.PORT, () =>  console.log(`Express is serving the dist folder on port ${process.env.PORT}`))
