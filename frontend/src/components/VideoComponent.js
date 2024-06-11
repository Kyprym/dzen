import { faCheck, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import VideSettingComponent from "./videSettingComponent";


function VideoComponent({ videoLink, video, videoType, videoPoster, logoChannel, nameVideoChannel, numVidoeViews, videoName }) {

    const [shortNameVideoChannel, setShotrtName] = useState(nameVideoChannel);
    const [videoChanelNameLenght, setVideoChanelNameLenght] = useState(true)
    const [stateControlsVideo, setStateControlsVideo] = useState(false);
    const [activateSubsButton, setActivateSubsButton] = useState(true);
    const [subscribe, setSubscrube] = useState(false);
    const [activeFaCheck, srtActiveFaCheck] = useState(false);

    function getShortNameVideoChannel() {
        const lowName = [...shortNameVideoChannel]
        if (lowName.length >= 16) {
            const nameVideoChannel = [...shortNameVideoChannel]
            lowName.length = 17
            const nameEnding = nameVideoChannel[lowName.length] + "..."
            const shortVideoChannelNameAndEnding = lowName.join("") + nameEnding
            setShotrtName(shortVideoChannelNameAndEnding)
            setVideoChanelNameLenght(false)
        }
    }


    return <div className="VideoComponent linksStyle"

        onMouseOver={() => {
            setStateControlsVideo(true)
            getShortNameVideoChannel()
            setActivateSubsButton(false)

        }}
        onMouseOut={
            () => {
                setStateControlsVideo(false)
                setVideoChanelNameLenght(true)
                setActivateSubsButton(true)
            }
        }

    >
        <a href={videoLink}>
            <video
                className="videoInVideoComponent"
                controls={stateControlsVideo}
                poster={videoPoster}

                type={videoType}
                muted={true}
                src={video}

                onMouseOver={(e) => {
                    e.currentTarget.play()

                }}
                onMouseOut={(e) => {
                    e.currentTarget.pause()
                    srtActiveFaCheck(false)
                }}
            />


        </a>
        <div className="videoInformationChannel">
            <div className="videInfHeaderChannel">
                <img src={logoChannel}

                    alt={nameVideoChannel} />
                <div>
                    <div className="nameVideoChannel">{videoChanelNameLenght ? nameVideoChannel : shortNameVideoChannel}</div>
                    <div className="numVidoeViews">
                        {numVidoeViews + " просмотров"}
                    </div>
                </div>

                <>
                    {
                        activateSubsButton ? "" :
                            <>
                                <div className="subscribeButton transitionTime"
                                    onClick={() => {
                                        setSubscrube(!subscribe)

                                    }}
                                >
                                    <>
                                        {subscribe ?
                                            <FontAwesomeIcon className="faCheck transitionTime" icon={faCheck} /> :
                                            "Подписаться"
                                        }
                                    </>
                                </div>
                                <FontAwesomeIcon className="faEllipsisVertical transitionTime" icon={faEllipsisVertical}
                                    onClick={
                                        () => {
                                            srtActiveFaCheck(true)
                                        }

                                    }

                                />
                                <div>
                                    {
                                        activeFaCheck ?
                                            <VideSettingComponent /> :
                                            <></>
                                    }
                                </div>
                            </>
                    }

                </>

            </div>

        </div>
        <div className="videoInformationVideoName">{videoName}</div>
    </div>
}
export default VideoComponent


// попробуй библиотеку ffmpeg для доставания постера/кадра из видео
