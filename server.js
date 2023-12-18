const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 30000;

app.use(express.static("./public"))

mongoose.connect
("mongodb+srv://icemed7001:Blood-psyco123@cluster0.ruzcwsz.mongodb.net/")
.then(()=>console.log("connected to mongodb atlas"))
.catch(err=>console.log(err))

const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());

app.post('/register', async (req, res) => {
    try {
        const { email, name, password } = req.body;

        const newUser = new User({ email, name, password });

        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {

    console.log(`Server is running on http://localhost:${PORT}`);
});
