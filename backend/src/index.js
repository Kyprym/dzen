const express = require('express');
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

let uuid = uuidv4(); //генерю уникальные id , в последующем - не нужно


let VideoDataBase = require('./dataBase/videoDataBase/VideoDataBase.json');
const { json } = require('body-parser');
const { Console } = require('console');


const app = express();
const PORT = process.env.PORT || 4000;

async function appendDataInBD(data, body) {
    data.push(body)
    fs.writeFile("./src/dataBase//videoDataBase/videoDataBase.json", JSON.stringify(data), "utf8", () => { })

}
async function editDataInBD(data) {
    fs.writeFile("./src/dataBase/videoDataBase/VideoDataBase.json", JSON.stringify(data), err => console.log(err))
}



app.use(express.json());




app.get('/', (req, res) => {
    res.json({ VideoDataBase })
});


app.post('/', async (req, res) => {
    const body = req.body;

    if (!body.videoId ||
        !body.videoName ||
        !body.videoChannelName ||
        !body.VideoPoster
    ) {
        res.json('не хватает данных или не корректный POST запрос');
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
        oldVideoPoster, newVideoPoster
    } = req.body;

    if (oldVideoId && newVideoId &&
        oldVideoName && newVideoName &&
        oldVideoPoster && newVideoPoster) {


        fs.readFile("./src/dataBase/videoDataBase/VideoDataBase.json", "utf8", (err, data) => {
            const jsonDataInDB = JSON.parse(data);
            let modArrBD = [];

            for (let i = 0; jsonDataInDB.length > i; i++) {
                if (
                    jsonDataInDB[i].videoId === oldVideoId &&
                    jsonDataInDB[i].videoName === oldVideoName &&
                    jsonDataInDB[i].VideoPoster === oldVideoPoster
                ) {
                    const changElem = {
                        videoId: newVideoId,
                        videoName: newVideoName,
                        videoChannelName: jsonDataInDB[i].videoChannelName,
                        VideoPoster: newVideoPoster
                    }
                    modArrBD.push(changElem);
                } else {
                    modArrBD.push(jsonDataInDB[i]);
                }
            }

            editDataInBD(modArrBD)
            res.json(modArrBD)
        })


    } else {
        res.json("не достаточо свойств или не корректный put запрос")
    }
});







app.delete('/', (req, res) => {
    const {
        videoId,
        videoName,
        videoChannelName,
        VideoPoster
    } = req.body;

    if (
        videoId &&
        videoName &&
        videoChannelName &&
        VideoPoster
    ) {
        fs.readFile("./src/dataBase/videoDataBase/VideoDataBase.json", "utf8", async (err, data) => {
            if (err) {
                res.json("нет ужных данных для удаления")
            } else {
                let jsonDataInDB = JSON.parse(data);
                let modArrBD = [];
                for (let i = 0; i < jsonDataInDB.length; i++) {
                    if (
                        jsonDataInDB[i].videoId === videoId &&
                        jsonDataInDB[i].videoName === videoName &&
                        jsonDataInDB[i].videoChannelName === videoChannelName &&
                        jsonDataInDB[i].VideoPoster == VideoPoster
                    ) {
                    } else {
                        modArrBD.push(jsonDataInDB[i]);
                    }
                    await editDataInBD(modArrBD)
                }
                res.json(modArrBD);
            };
        });
    } else {
        res.json('запрос не содержт нужых свойств')
    }
});


app.listen(PORT, () => {
    console.log(`API starting on port ${PORT}`)
})