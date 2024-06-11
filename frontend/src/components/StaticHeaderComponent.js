import { faCircleUser, faEarthAmerica, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProfileComponent from "./profileComponent"
import { useState } from "react"




function StaticHeaderComponent({ heightHeader }) {
    const [stateProfile, setStateProfile] = useState(false)
    function closeProfileWindow() {
        setStateProfile(false)
    }

    return <div id="staticHeaderComponent" className="transitionTime" style={{
        height: `${heightHeader}px`
    }}>
        <div id="StaticHeaderHotBarRightIcons" className="staticHeaderIcon StaticHeaderHotBar">
            <FontAwesomeIcon className="faHeaderIcon" icon={faMagnifyingGlass} />
            <FontAwesomeIcon className="faHeaderIcon" icon={faCircleUser}
                onClick={() => {
                    setStateProfile(true)
                }} />
            {
                stateProfile ?
                    <div>
                        <ProfileComponent props={closeProfileWindow} />
                    </div> :
                    <></>
            }
        </div>

        <div id="StaticHeaderHotBarLeftIcons" className="staticHeaderIcon faHeaderIcon">
            <FontAwesomeIcon icon={faEarthAmerica} />
            <span>Дзен</span>
        </div>
    </div>
}
export default StaticHeaderComponent