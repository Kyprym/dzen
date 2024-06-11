import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function ProfileComponent({ props }) {
    return <div className="profileComponent">
        <div className="faXmark transitionTime" onClick={props}>
            <FontAwesomeIcon icon={faXmark} />
        </div>
        <div id="profileText">
            <div>давай просто предстваим,</div>
            <div>что здесь есть авторизация</div>
        </div>
        <div>
            <div id="myAccountButton" className="profileButton transitionTime">Да, это мой аккаунт</div>
            <div id="notMyAccountButton" className="profileButton transitionTime">Выбрать другой</div>
        </div>
    </div>
}
export default ProfileComponent