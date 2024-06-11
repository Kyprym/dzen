import { faCompass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import compas from "../img/compas.png"
//const themImg = compas  //"https://dnpmag.com/wp-content/uploads/2016/05/243.jpg"


function ThemeOnDzen() {
    return <div className="linksStyle" id="themeOnDzen">
        <div id="themeComponentHeader">
            <a href="theme.html">
                <div className="logo componentLogo">
                    <FontAwesomeIcon icon={faCompass} />
                    Темы в Дзене
                </div>
            </a>
            <a className="linksStyle moreContentButton" href="theme.html">Ещё</a>
        </div>
        <div className='dividingLine'></div>

        <div id="themePicture" >
            <picture>
                <img id="imgThemeOnDzen" src={compas} alt="theme" />
                <div id="textInThemeAnimation">
                    Темы
                </div>
                <div id="themeDownText">
                    <div>Популярный контент</div>
                    <div>На любой вкус</div>
                </div>
            </picture>

        </div>



    </div>

}
export default ThemeOnDzen