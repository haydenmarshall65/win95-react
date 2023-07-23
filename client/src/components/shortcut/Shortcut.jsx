import "./Shortcut.scss"

export const Shortcut = (props) => {

    const {icon, shortcutName, onClick} = props; 
    console.log(props)

    return(
        <div className="shortcut" tabIndex="0" onClick={(e) => onClick(e, shortcutName)}>
            {icon}
            <p className="shortcut-name">{shortcutName}</p>
        </div>
    )
}