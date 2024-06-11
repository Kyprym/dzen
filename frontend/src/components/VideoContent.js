import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVideoCamera } from "@fortawesome/free-solid-svg-icons"

function VideoContent() {
    return <div>
        <div id="videoContentHeader" >
            <div className="linksStyle" id="videoHeader">
                <a href="video.html">
                    <div className="logo componentLogo">
                        <FontAwesomeIcon icon={faVideoCamera} />
                        Видео
                    </div>
                </a>
                <a className="linksStyle moreContentButton transitionTime" href="video.html">Ещё</a>
            </div>
        </div>
    </div>
}


export default VideoContent
