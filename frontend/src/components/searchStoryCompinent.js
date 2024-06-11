import HistorySearchComp from "./historySearchComp";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { nanoid } from "nanoid";
import { useState } from "react"

const historyArr = ['Это не', "настоящая история браузера", "ты, конечно, мождешь попробовать загуглить", "но работать не будет", "тк мне влом подтягивать базу данных",
    'Это не', "настоящая история браузера", "ты, конечно, мождешь попробовать загуглить", "но работать не будет", "тк мне влом подтягивать базу данных"]

function SearchStoryComponent() {

    const [searchValue, setSearchValue] = useState("");
    const [inpState, setInpState] = useState(true);
    const [stateSearchHistoryShow, setStateSearchHistoryShow] = useState(false);


    const historyShow = historyArr.map((elem) => {
        const listKey = nanoid()
        return <HistorySearchComp
            searchHistoryShow={stateSearchHistoryShow}
            reqText={<p key={listKey}>{elem}</p>}
        />
    })
    return <div
        id={stateSearchHistoryShow ? "shadowSearchComponentShow" : "shadowSearchComponentNotShow"}
        onClick={(e) => {
            if (e.target.id === "shadowSearchComponentShow") {
                setStateSearchHistoryShow(false)
            }
        }}
    >
        <div className="transitionTime" id={stateSearchHistoryShow ? 'searchHeaderBox' : "searchHeaderBoxDisplayNone"} >
            <div
                className="linksStyle"
                id="searchComplateComponent">
                <input
                    id="searchInpComponent"
                    autoComplete="off"
                    placeholder="Поиск Яндекса"
                    type="search"
                    value={searchValue}
                    onClick={() => {
                        setStateSearchHistoryShow(true)

                    }}
                    onChange={(e) => {
                        setSearchValue(e.target.value)
                        setInpState(false)
                        if (e.target.value === '') {
                            setInpState(true)
                        }
                        if (searchValue !== '') {
                            setStateSearchHistoryShow(false)
                        }
                    }}
                    onFocus={() => {
                        setStateSearchHistoryShow(true)
                    }}
                />
                <div className="transitionTime" id="searchClearIcon">{inpState ? < FontAwesomeIcon icon={faKeyboard} size="2xl" title="у тебя есть клавиатура, не трогай эту кнопку" />
                    :
                    < FontAwesomeIcon icon={faXmark} size="2xl"
                        onClick={() => {
                            setSearchValue('')
                            setInpState(true)
                        }}
                    />}</div>

                <button className="linksStyle transitionTime" key="searchBtn" id="searchBtn">Найти</button>

            </div>

            <table>{historyShow}</table>
        </div>
    </div>
}
export default SearchStoryComponent


