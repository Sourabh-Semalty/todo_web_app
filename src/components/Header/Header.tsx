import { FiPlusCircle, FiSearch, FiBell } from "react-icons/fi"
import { MdOutlineCollections, MdOutlineDashboard } from "react-icons/md"
import "./Header.css"
const Header = () => {
    return (
        <header>
            <section className="header_container wrapper_container">
                <div className="left_header_container">
                    <ul className="left_header_menu">
                        <li className="menu_item">
                            <MdOutlineDashboard />
                            <span className="menu_info" title="dashboard">
                                Dashboard
                            </span>
                        </li>
                        <li className="menu_item">
                            <MdOutlineCollections />
                            <span className="menu_info">Collections</span>
                        </li>
                    </ul>
                </div>
                <div className="right_header_container">
                    <ul className="right_header_menu">
                        <li className="menu_item" title="Add new collection">
                            <FiPlusCircle />
                        </li>
                        <li className="menu_item">
                            <FiSearch />
                        </li>
                        <li className="menu_item">
                            <FiBell />
                        </li>
                        <li className="menu_item">
                            <span className="account_info img_circle">
                                {/* <img src="./images/avatar.jpg" alt="avatar" /> */}
                            </span>
                        </li>
                    </ul>
                </div>
            </section>
        </header>
    )
}

export default Header
