import "./Project10.css"
import video1 from "./video.mp4"
import video2 from "./video2.mp4"
const Project10 = () => {
  return (
    <div className="video">
        <video src={video1} autoPlay loop muted></video>
        <div className="videoLoop">
        <video src={video2} autoPlay loop muted></video>
        </div>
    </div>
  )
}

export default Project10