import Button from "../components/Buttons/Button"
import CollectionCard from "../components/Cards/CollectionCard"
import { BsThreeDots } from "react-icons/bs"
import { BiPlus } from "react-icons/bi"
import "./Collections.css"
const Collections = () => {
    return (
        <section className=" wrapper_container_md section_pad_x">
            <div className="collection_header">
                <h3 className="collection_title">Collections</h3>
                <span className="collection_dropdown">
                    <BsThreeDots />
                </span>
            </div>
            <div className="collection_tab">
                <Button name="Favorites" />
                <Button name="All Collections" />
            </div>
            <div className="collections">
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
                <div className="collection_card add">
                    <span className="add_collection">
                        <BiPlus />
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Collections
