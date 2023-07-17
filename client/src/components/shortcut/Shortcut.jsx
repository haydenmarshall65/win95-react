import "./Shortcut.scss";

export const Shortcut = ({icon, shortcutName}) => {
    const handleClick = () => {
    }

    return(
        <div className="shortcut" tabIndex="0" onClick={handleClick}>
            {icon}
            <p className="shortcut-name">{shortcutName}</p>
        </div>
    )
}