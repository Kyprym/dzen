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
    await fs.writeFile("./src/dataBase//videoDataBase/videoDataBase.json", JSON.stringify(data), "utf8", () => { })

}
async function editDataInBD(data) {
    await fs.writeFile("./src/dataBase/videoDataBase/VideoDataBase.json", JSON.stringify(data), err => console.log(err))
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
        !body.VideoPoster ||
        !body.wiewsCount
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
                res.json("нет нужных данных")
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

                        const newElemDataVideo = {
                            videoId: req.body.newVideoId,
                            videoName: req.body.newVideoName,
                            videoChannelName: jsonDataInDB[i].videoChannelName,
                            VideoPoster: req.body.newVideoPoster,
                            wiewsCount: req.body.newWiewsCount
                        }
                        jsonDataInDB[i] = newElemDataVideo;
                        await editDataInBD(jsonDataInDB);
                        res.json(jsonDataInDB);
                    };
                };
            };
        });

    } else {
        res.json('не хватает данных или не корректный PUT запрос');
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
                }
                await editDataInBD(modArrBD)

                res.json(modArrBD);
            };
        });
    }








});







app.listen(PORT, () => {
    console.log(`API starting on port ${PORT}`)
})