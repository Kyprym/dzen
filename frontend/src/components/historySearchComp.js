import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-solid-svg-icons"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
function HistorySearchComp({ reqText, searchHistoryShow }) {




    return <>


        {searchHistoryShow ? <div className="historySearchComp linksStyle transitionTime">

            <tr >
                <td className="searchClock"><FontAwesomeIcon icon={faClock} className="faClock" /></td>
                <td className="searchStringTableText">{reqText}</td>
                <td><FontAwesomeIcon icon={faArrowUp} className="faArrowUp" /></td>
            </tr>

        </div> : ""}
    </>
}
export default HistorySearchComp