import { FaBarsStaggered, FaBookTanakh, FaReceipt } from "react-icons/fa6"
import "./Project9.css"
import { FaBolt, FaBus, FaCar, FaHome, FaPlane} from "react-icons/fa"
const Project9 = () => {
    return (
        <div className="mainGrid">
            <div className="gridCol"><FaHome/></div>
            <div className="gridCol"><FaPlane/></div>
            <div className="gridCol"><FaCar/></div>
            <div className="gridCol"><FaBus/></div>
            <div className="gridCol"><FaBookTanakh/></div>
            <div className="gridCol"><FaReceipt/></div>
            <div className="gridCol"><FaBolt/></div>
            <div className="gridCol"><FaBarsStaggered/></div>
        </div>
    )
}

export default Project9