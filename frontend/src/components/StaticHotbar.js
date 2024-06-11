import { faBookOpen, faBookmark, faCompass, faFaceLaugh, faFileVideo, faGamepad, faHouse, faNewspaper, faSquareCheck, faVideoCamera } from '@fortawesome/free-solid-svg-icons';
import StaticHotbarButton from './staticHotbarButton';
function StaticHotbar({ marginTopHotbar }) {
    return <div className="linksStyle transitionTime" id="staticHotbar" style={{
        top: `${marginTopHotbar}px`
    }}>
        <StaticHotbarButton
            buttonText={"Главная"}
            buttonIcon={faHouse}
        />
        <StaticHotbarButton
            buttonText={"Подписки"}
            buttonIcon={faSquareCheck}
        />
        <StaticHotbarButton
            buttonText={"Темы"}
            buttonIcon={faCompass}
        />
        <StaticHotbarButton
            buttonText={"Видео"}
            buttonIcon={faVideoCamera}
        />
        <StaticHotbarButton
            buttonText={"Статьи"}
            buttonIcon={faBookOpen}
        />
        <StaticHotbarButton
            buttonText={"Ролики"}
            buttonIcon={faFileVideo}
        />
        <StaticHotbarButton
            buttonText={"Новости"}
            buttonIcon={faNewspaper}
        />
        <StaticHotbarButton
            buttonText={"Сохраненные"}
            buttonIcon={faBookmark}
        />
        <hr></hr>
        <StaticHotbarButton
            buttonText={"Видеоигры"}
            buttonIcon={faGamepad}
        />
        <StaticHotbarButton
            buttonText={"Детям"}
            buttonIcon={faFaceLaugh}
        />
        <hr></hr>


    </div>
}
export default StaticHotbar