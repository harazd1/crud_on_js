import express from 'express'
import mongoose from 'mongoose'
import router from "./router.js";
import  controllers from 'controllers'

const PORT = 5000;
const DB_URL = 'mongodb+srv://Mykola:gordon123@cluster0.phcdol2.mongodb.net/Users?retryWrites=true&w=majority';

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', router)
app.use(controllers);

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()
