const express = require('express');
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

let uuid = uuidv4();


let VideoDataBase = require('./dataBase/videoDataBase/VideoDataBase.json');
const { json } = require('body-parser');


const app = express();
const PORT = process.env.PORT || 4000;

async function appendDataInBD(data, body) {
    data.push(body)
    await fs.writeFile("./src/dataBase//videoDataBaseVideoDataBase.json", JSON.stringify(data), "utf8", () => { })

}



app.use(express.json()); //переводим все запросы в json




app.get('/', (req, res) => {
    res.json({ VideoDataBase })
});


app.post('/', async (req, res) => {
    const body = req.body;

    if (!body.videoId ||
        !body.videoName ||
        !body.videoChannelName ||
        !body.VideoPoster ||
        !body.wiewsCount
    ) {
        res.json('не хватает данных или не корректный запрос');
        return;
    } else {
        fs.readFile("./src/dataBase/videoDataBase/VideoDataBase.json", "utf8", (err, data) => {
            if (err) {
                console.log(err);
            } else {
                const jsonDataInDB = JSON.parse(data);
                appendDataInBD(jsonDataInDB, req.body);
            }
        });
    }
    res.json(body)
});





app.put('/', async (req, res) => {
    const {
        oldVideoId, newVideoId,
        oldVideoName, newVideoName,
        oldVideoPoster, newVideoPoster,
        oldWiewsCount, newWiewsCount
    } = req.body;

    if (
        oldVideoId && newVideoId &&
        oldVideoName && newVideoName &&
        oldVideoPoster && newVideoPoster &&
        oldWiewsCount && newWiewsCount

    ) {

        fs.readFile("./src/dataBase/videoDataBase/VideoDataBase.json", "utf8", async (err, data) => {
            if (err) {
                console.log(err);
            } else {
                let jsonDataInDB = JSON.parse(data);
                const lengthDatainBD = jsonDataInDB.length;
                for (let i = 0; i < lengthDatainBD; i++) {
                    if (
                        jsonDataInDB[i].videoId == oldVideoId &&
                        jsonDataInDB[i].videoName == oldVideoName &&
                        jsonDataInDB[i].VideoPoster == oldVideoPoster &&
                        jsonDataInDB[i].wiewsCount == oldWiewsCount
                    ) {


                        const newDataVideo = {
                            videoId: req.body.newVideoId,
                            videoName: req.body.newVideoName,
                            VideoPoster: req.body.newVideoPoster,
                            wiewsCount: req.body.newWiewsCount
                        }





                        res.json(jsonDataInDB[i])

                    }
                }
            }
        })





    } else {
        console.log('не хватает данных')
    }

});








app.listen(PORT, () => {
    console.log(`API starting on port ${PORT}`)
})







/*

app.delete('/', (req, res) => {
    const { name } = req.body;

    dataBase = dataBase.filter(elem => {
        return elem !== name;
    })
    res.json({ status: `${name} is not your friend anymore` });
});







*/