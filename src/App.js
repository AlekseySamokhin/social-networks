import {BrowserRouter as Router} from "react-router-dom";

import Main from "./components/Main";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

import styles from "./App.module.css";

const App = (props) => {
    const {state, addPost, addMessage, updateNewPostText, updateNewMessageText} = props;
    const {sideBar, ...mainData } = state;

    return (
        <Router>
            <div className={styles.wrapper}>
                <Header/>
                <div className={styles.main}>
                    <Main
                        addPost={addPost}
                        addMessage={addMessage}
                        updateNewMessageText={updateNewMessageText}
                        updateNewPostText={updateNewPostText}
                        state={mainData}
                    />
                </div>
                <Navbar state={sideBar}/>
            </div>
        </Router>
    );
};

export default App;
