import express from 'express'
import {dirname,join} from 'path'
import { fileURLToPath } from 'url'
import router from './routes/index.js'
import { Conectar } from './public/services/conexion.mjs'

const app= express()
const __dirname= dirname(fileURLToPath(import.meta.url))
console.log(join(__dirname, 'views'))

app.set('views', join(__dirname,'views'))
app.set('view engine', 'ejs')
app.use(router)

app.use(express.static(join(__dirname,'public')))

Conectar()

app.listen(3000)
console.log('Server está siendo escuchado en el puerto ',3000)
