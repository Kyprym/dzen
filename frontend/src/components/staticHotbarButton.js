import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function StaticHotbarButton({ buttonIcon, buttonText }) {
    return <tr className="staticHotbarButton">
        <td><FontAwesomeIcon icon={buttonIcon} className="staticHotbarIcon" /></td>
        <td className="staticHotbarText transitionTime">{buttonText}</td>
    </tr>
}
export default StaticHotbarButton