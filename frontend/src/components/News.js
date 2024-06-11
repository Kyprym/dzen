import { faChevronLeft, faChevronRight, faNewspaper } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import NewsList from "./newsList";
import { useState } from "react";



const newsArr = ["Главная", "Город", "Интересное", "Спорт", "Политика",
    "Проишествия", "Авто", "Главная", "Город", "Интересное", "Спорт", "Политика",
    "Проишествия", "Авто", "Авто", "Главная", "Город", "Интересное", "Спорт", "Политика",
    "Проишествия", "Авто"]



function News() {
    const rightShift = -37
    const [rulleteSwypeState, setRulleteSwipeState] = useState(rightShift)
    function rulleteSwypeLeft() {
        setRulleteSwipeState(rulleteSwypeState - 10)
    }
    function rulleteSwypeRight() {
        setRulleteSwipeState(rulleteSwypeState + 10)
    }

    return <div id="news" className="linksStyle">
        <div id="newsHeader">

            <a href="news.html"  >
                <div className="logo componentLogo">
                    <FontAwesomeIcon icon={faNewspaper} />
                    Новости
                </div>
            </a>

            <div id="newsRulleteHeader">
                <div className="faChevron transitionTime">
                    {(rulleteSwypeState > -37) ? <FontAwesomeIcon icon={faChevronLeft} onClick={rulleteSwypeLeft} /> : <></>}
                </div>
                <table id="newsRulette" className="transitionTime" style={{
                    right: `${rulleteSwypeState}em`
                }}>
                    <tr>
                        <td className="newsRuletteComponent transitionTime"
                            onClick={(e) => {

                            }}
                        >{newsArr[0]}</td>
                        <td className="newsRuletteComponent transitionTime">{newsArr[1]}</td>
                        <td className="newsRuletteComponent transitionTime">{newsArr[2]}</td>
                        <td className="newsRuletteComponent transitionTime">{newsArr[3]}</td>
                        <td className="newsRuletteComponent transitionTime">{newsArr[4]}</td>
                        <td className="newsRuletteComponent transitionTime">{newsArr[5]}</td>
                        <td className="newsRuletteComponent transitionTime">{newsArr[6]}</td>
                        <td className="newsRuletteComponent transitionTime">{newsArr[7]}</td>
                        <td className="newsRuletteComponent transitionTime">{newsArr[8]}</td>
                        <td className="newsRuletteComponent transitionTime">{newsArr[9]}</td>
                        <td className="newsRuletteComponent transitionTime">{newsArr[10]}</td>
                        <td className="newsRuletteComponent transitionTime">{newsArr[11]}</td>
                        <td className="newsRuletteComponent transitionTime">{newsArr[12]}</td>
                        <td className="newsRuletteComponent transitionTime">{newsArr[13]}</td>
                        <td className="newsRuletteComponent transitionTime">{newsArr[14]}</td>
                        <td className="newsRuletteComponent transitionTime">{newsArr[15]}</td>
                        <td className="newsRuletteComponent transitionTime">{newsArr[16]}</td>
                    </tr>
                </table>
                <div className="faChevron transitionTime">
                    {(rulleteSwypeState <= -7) ? <FontAwesomeIcon icon={faChevronRight} onClick={rulleteSwypeRight} /> : <></>}
                </div>
            </div>

        </div>
        <NewsList />

    </div>
}
export default News