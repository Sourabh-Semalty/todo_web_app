import "./Button.css"

const Button = ({ name = "Test" }) => {
    return <button className="btn tab-button">{name}</button>
}

export default Button
