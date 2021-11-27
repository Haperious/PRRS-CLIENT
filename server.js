const express = require('express');
const fileUpload = require('express-fileUpload');


const app = express();
app.use(fileUpload());

app.post('/upload', (req, res) => {

    console.log("called")
    if (req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded' });
    }

    const file = req.files.file;

    file.mv(`${__dirname}/public/merchant/${file.name}`, err =>{
        if(err){
        
        console.error(err);
        return res.status(500).send(err)}

        res.json ({fileName: file.name, filePath:`/merchant/${file.name}`})
    });
});

app.get('/test').then((response) => {
    console.log('Everything is awesome.');
}).catch((error) => {
    console.warn('Not good man :(');
})

//app.get('/test', () =>{ console.log("heeeey")});

app.listen (8080, () => console.log('Server Started (server.js 8080)... '));