import "./HomeScreen.scss";
import { TaskBar, List } from "@react95/core"
import { WindowsExplorer, Appwiz1503, Inetcpl1313  } from "@react95/icons"
import {Shortcut} from "../../components/shortcut/Shortcut"

export const HomeScreen = () => {

    return(
        <div className="home-screen">
            <div className="shortcuts">
                <Shortcut icon={<Appwiz1503 variant="32x32_4"/>} shortcutName={"Recycling Bin"}/>
                <Shortcut icon={<Inetcpl1313 variant="32x32_4"/>} shortcutName={"Internet Explorer"} />
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