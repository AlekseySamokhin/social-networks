import { Route, Routes } from "react-router-dom";

import Profile from "./Profile";
import Dialogs from "./Dialogs";
import News from "./News";
import Music from "./Music";
import Settings from "./Settings";

import styles from "./Main.module.css";

const Main = (props) => {
    const { state, addPost, addMessage, updateNewPostText, updateNewMessageText} = props;

    const { profilePage, dialogsPage } = state;

    return (
        <Routes>
            <Route path="/profile" element={<Profile addPost={addPost} updateNewPostText={updateNewPostText} state={profilePage} />} />
            <Route path="/dialogs/*" element={<Dialogs state={dialogsPage} addMessage={addMessage} updateNewMessageText={updateNewMessageText} />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    );
};

export default Main;