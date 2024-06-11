import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NewsListComponent({ text, link }) {
    return <p className="newsListComponent transitionTime">
        <FontAwesomeIcon icon={faNewspaper} />
        <a href={link}>{text}</a>
    </p>
}
export default NewsListComponent