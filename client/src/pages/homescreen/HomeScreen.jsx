import "./HomeScreen.scss";
import { TaskBar, List, Modal } from "@react95/core"
import { WindowsExplorer, Appwiz1503, Inetcpl1313  } from "@react95/icons"
import {Shortcut} from "../../components/shortcut/Shortcut"

export const HomeScreen = () => {

    const handleShortcutClick = ({name}) => {
        return(
            <Modal title={name}/>
        )
    }

    return(
        <div className="home-screen">
            <div className="shortcuts">
                <Shortcut icon={<Appwiz1503 variant="32x32_4"/>} shortcutName={"Recycling Bin"} onClick={handleShortcutClick}/>
                <Shortcut icon={<Inetcpl1313 variant="32x32_4"/>} shortcutName={"Internet Explorer"} onClick={handleShortcutClick}/>
            </div>
            <TaskBar list={<List>
            <List.Item icon={<WindowsExplorer variant="32x32_4" />} >
              File Explorer
            </List.Item>
            <List.Divider/>
            <List.Item icon={<Appwiz1503 variant="32x32_4"/>}>
                Recycling Bin
            </List.Item>
            
          </List>}/>
          </div>
    )
}