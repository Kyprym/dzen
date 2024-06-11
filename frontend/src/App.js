
import { useState } from 'react';
import News from './components/News';
import StaticHeaderComponent from './components/StaticHeaderComponent';
import StaticHotbar from './components/StaticHotbar';
import ThemeOnDzen from './components/ThemeOnDzen';
import SearchStoryComponent from './components/searchStoryCompinent';
import VideoListComponent from './components/videoListComlonent';


function App() {
  const [stateStaticHeader, setStateStaticHeader] = useState(0)
  const [stateStaticHotbar, setStateStaticHotbar] = useState(230)

  function scrollContoll() {
    const scrollY = window.scrollY
    if (scrollY > 200) {
      setStateStaticHeader(75)
      setStateStaticHotbar(105)
    } else {
      setStateStaticHeader(0)
      setStateStaticHotbar(230)

    }
  }
  window.onscroll = scrollContoll

  return <>
    <StaticHeaderComponent heightHeader={stateStaticHeader} />
    <div id='header'>
      <div id='searchOnHeader'>
        <SearchStoryComponent />
      </div>
    </div>

    <div id='content'>
      <StaticHotbar marginTopHotbar={stateStaticHotbar} />

      <div id='leftIndentation'></div>

      <div id='contentSpace'>
        <div id='contentContainer' className='linksStyle'>
          <div className='dividingLine'></div>
          <aside id='newsAndThemeHeader'>
            <News />

            <ThemeOnDzen />
          </aside>
          <div className='dividingLine'></div>


          <VideoListComponent />
        </div>
      </div>

    </div>

  </>
}

export default App;
