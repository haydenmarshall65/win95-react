import "./Shortcut.scss"

export const Shortcut = ({icon, shortcutName}) => {

    return(
        <div className="shortcut" tabIndex="0">
            {icon}
            <p className="shortcut-name">{shortcutName}</p>
        </div>
    )
}