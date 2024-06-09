const express = require('express');
const fs = require('fs')

let VideoDataBase = require('./dataBase/VideoDataBase.json');
const { json } = require('body-parser');


const app = express();
const PORT = process.env.PORT || 4000;

async function appendDataInBD(data, body) {
    data.push(body)
    await fs.writeFile("./src/dataBase/VideoDataBase.json", JSON.stringify(data), "utf8", () => { })

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
        res.json('не хватает данных или не корректный запрос')
        return;
    } else {
        fs.readFile("./src/dataBase/VideoDataBase.json", "utf8", async (err, data) => {
            if (err) {
                console.log(err);
            } else {
                const jsonDataInDB = JSON.parse(data);
                appendDataInBD(jsonDataInDB, req.body);
            }
        })
    }

    res.json(body)
});


app.put('/', (req, res) => {
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
        console.log("есть нуженые данные")

    } else {
        console.log('не хватает данных')
    }




    res.json('put запрос')





    /*
    const { oldName, newName } = req.body;
    if (oldName && newName) {
        const index = dataBase.findIndex((friendName) => friendName === oldName);
        VideoDataBase[index] = newName;
        res.json({ status: `${oldName} теперь ${newName}` })
    }*/
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


