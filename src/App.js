import {BrowserRouter as Router} from "react-router-dom";

import Main from "./components/Main";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

import styles from "./App.module.css";

const App = (props) => {
    const {state, dispatch } = props;

    return (
        <Router>
            <div className={styles.wrapper}>
                <Header/>
                <div className={styles.main}>
                    <Main
                        dispatch={dispatch}
                        state={state}
                    />
                </div>
                <Navbar state={state}/>
            </div>
        </Router>
    );
};

export default App;
