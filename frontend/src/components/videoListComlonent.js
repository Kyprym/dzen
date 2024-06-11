import VideoComponent from "./VideoComponent"
import Video from "../videoStorage/Video.mp4"
import Poster from "../videoStorage/poster.jpg"
import VideoContent from "./VideoContent"



const videoArr =
    [
        { link: "video.html", vid: Video, type: "video/mp4", poster: Poster, nameChan: "какой то ", views: "100K", name: "В React все свойства и атрибуты DOM (включая обработчики событий) должны быть в" },
        { link: "video.html", vid: Video, type: "video/mp4", poster: Poster, nameChan: "рандомный хрен", views: "100K", name: "videoName" },
        { link: "video.html", vid: Video, type: "video/mp4", poster: Poster, nameChan: "какой то рандомный хрен", views: "100K", name: "videoName" },
        { link: "video.html", vid: Video, type: "video/mp4", poster: Poster, nameChan: "какой то рандомный хрен", views: "100K", name: "videoName" },
        { link: "video.html", vid: Video, type: "video/mp4", poster: Poster, nameChan: "какой то рандомный хрен", views: "100K", name: "videoName" },
        { link: "video.html", vid: Video, type: "video/mp4", poster: Poster, nameChan: "какой то рандомный хрен", views: "100K", name: "videoName" },
        { link: "video.html", vid: Video, type: "video/mp4", poster: Poster, nameChan: "какой то рандомный хрен", views: "100K", name: "стиле camelCase. Например, HTML-атрибут tabindex соответствует атрибуту tabIndex " },
        { link: "video.html", vid: Video, type: "video/mp4", poster: Poster, nameChan: "какой то рандомный хрен", views: "100K", name: "videoName" },
        { link: "video.html", vid: Video, type: "video/mp4", poster: Poster, nameChan: "какой то рандомный хрен", views: "100K", name: "Когда React встречает подобный элемент, он собирает все JSX-атрибуты и дочерние" },
        { link: "video.html", vid: Video, type: "video/mp4", poster: Poster, nameChan: "какой то рандомный хрен", views: "100K", name: "videoName" },
        { link: "video.html", vid: Video, type: "video/mp4", poster: Poster, nameChan: "какой то рандомный хрен", views: "100K", name: "videoName" },
        { link: "video.html", vid: Video, type: "video/mp4", poster: Poster, nameChan: "какой то рандомный хрен", views: "100K", name: " добавить атрибуты к компонентам: используйте" },
    ]



function VideoListComponent() {


    const videoListShow = videoArr.map((item) => {
        const fullName = item.name
        let arrFullName = [...fullName]
        if (arrFullName.length > 35) {
            arrFullName.length = 35;
            arrFullName = arrFullName.join("") + "..."
        }


        return <VideoComponent
            videoLink={item.link}
            video={item.vid}
            videoType={item.type}
            videoPoster={item.poster}
            logoChannel={item.poster}
            nameVideoChannel={item.nameChan}
            numVidoeViews={item.views}
            videoName={arrFullName}

        />
    })

    return <div>
        <VideoContent />
        <div className="dividingLine"></div>
        <div id="VideoListComponent">
            {videoListShow}
        </div>
    </div>

}
export default VideoListComponent