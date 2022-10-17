import {Route, Routes} from "react-router-dom";

import Profile from "./Profile";
import News from "./News";
import Music from "./Music";
import Settings from "./Settings";
import DialogsContainer from "./Dialogs/DialogsContainer";

import styles from "./Main.module.css";


const Main = (props) => {
    const {store} = props;

    return (
        <Routes>
            <Route path="/profile" element={<Profile store={store}/>}/>
            <Route path="/dialogs/*" element={<DialogsContainer store={store}/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/music" element={<Music/>}/>
            <Route path="/settings" element={<Settings/>}/>
        </Routes>
    );
};

export default Main;