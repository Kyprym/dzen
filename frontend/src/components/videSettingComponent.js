import { faBookmark, faCircleMinus, faFaceGrinHearts, faQuestion, faShare, faTriangleExclamation, faUserCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"



function VideSettingComponent() {
    const [stateNotReconmend, setStateNotRecomend] = useState(false)

    function notRecomend() {
        setStateNotRecomend(!stateNotReconmend)
    }



    return <>
        <div className="settingVideoPublicatin transitionTime">
            <div onClick={notRecomend}>
                <>
                    {
                        stateNotReconmend ?
                            <span>
                                Не будь привередой
                            </span> :
                            <>
                                <span>
                                    <FontAwesomeIcon icon={faCircleMinus} />
                                </span>
                                <span>
                                    Не рекомедовать канал
                                </span>
                            </>

                    }
                </>
            </div>
            <div>
                <span>
                    <FontAwesomeIcon icon={faFaceGrinHearts} />
                </span>
                Хочу больше таких публикаций
            </div>
            <hr />
            <div>
                <span>
                    <FontAwesomeIcon icon={faShare} />
                </span>
                Поделиться
            </div>
            <div>
                <span>
                    <FontAwesomeIcon icon={faBookmark} />
                </span>
                Сохранить
            </div>
            <hr />
            <div>
                <span>
                    <FontAwesomeIcon icon={faUserCheck} />
                </span>
                Подписаться
            </div>
            <div>
                <span>
                    <FontAwesomeIcon icon={faQuestion} />
                </span>
                Почему я вижу эту публикацию</div>
            <div>
                <span>
                    <FontAwesomeIcon icon={faTriangleExclamation} />
                </span>
                Пожаловаться
            </div>
        </div>
    </>
}
export default VideSettingComponent