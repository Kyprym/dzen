
import { useState } from "react"
import NewsListComponent from "./NewsListComponent"


const newsListArrFiveElem = [
    "1Например, ничего не было сказано про мультимодальность, а ведь в GigaChat'е реализована",
    "2Например, ничего не было сказано про мультимодальность, а ведь в GigaChat'е реализована",
    "Например, ничего не было сказано про мультимодальность, а ведь в GigaChat'е реализована",
    "3Например, ничего не было сказано про мультимодальность, а ведь в GigaChat'е реализована",
    "Например, ничего не было сказано про мультимодальность, а ведь в GigaChat'е реализована"]
const newsListArrTenElem = [
    "4Например, ничего не было сказано про мультимодальность, а ведь в GigaChat'е реализована",
    "ничего не было сказано про мультимодальность",
    "ничего не было сказано про мультимодальность",
    "ничего не было сказано про мультимодальность",
    "ничего не было сказано про мультимодальность",
    "ничего не было сказано про мультимодальность"]

const newsListArrFiveTenElem = ["Например, ничего не было сказано про мультимодальность, а ведь в GigaChat'е реализована", "ничего не было сказано про мультимодальность", "ничего не было сказано про мультимодальность",
    "Например, ничего не было сказано про мультимодальность, а ведь в GigaChat'е реализована",
    "ничего не было сказано про мультимодальность", "ничего не было сказано про мультимодальность",]



const newsListLinks = ["index0.html", "index1.html", "index2.html", "index3.html", "index4.html", "index5.html",
    "index6.html", "index7.html", "index0.html", "index1.html", "index2.html", "index3.html",
    "index4.html", "index5.html", "index6.html", "index7.html",
]

//при работе с бэком можно будет преобразовать две переменный в объект, используя конструктор и тд




function NewsList() {
    const [newsState, setFiveNewsState] = useState(newsListArrFiveElem)
    const [clickFiveNewsState, setClickFiveNewsState] = useState(true)
    const [restNewsState, setRestNewsState] = useState(false)


    const newsListShow = newsState.map((news, i) => {
        return <NewsListComponent text={news} link={newsListLinks[i]} />
    })
    return <div id="newsList">
        {newsListShow}
        <>{clickFiveNewsState ? <p className="fiveNewsState transitionTime"
            onClick={() => {

                setFiveNewsState(newsState.concat(newsListArrTenElem))
                setClickFiveNewsState(false)

            }}>Еще 5 новостей</p>
            :
            <p
                onClick={() => {
                    setFiveNewsState(newsState.concat(newsListArrFiveTenElem))
                    setRestNewsState(true)
                }}
                className="fiveNewsState transitionTime">
                {restNewsState ? <a href="news.html">Показать все новости</a> : <p>Еще 5 новостей</p>}
            </p>}</>
    </div>
}
export default NewsList


