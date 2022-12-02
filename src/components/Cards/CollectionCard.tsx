import { IoSchoolOutline } from "react-icons/io5"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import "./CollectionCard.css"

const CollectionCard = () => {
    return (
        <div className="collection_card">
            <span className="icon_circle">
                <IoSchoolOutline />
            </span>
            <h5 className="card_name">School</h5>
            <div className="card_footer">
                <span className="card_more_info">4/8 done</span>
                <div className="task_complete_spinner">
                    <CircularProgressbar
                        strokeWidth={15}
                        value={50}
                        styles={buildStyles({
                            trailColor: "#32323f",
                        })}
                    />
                </div>
            </div>
        </div>
    )
}

export default CollectionCard
