import {NavLink} from 'react-router-dom';

import FriendsList from "./FriendsList";

import styles from "./Navbar.module.css";

const Navbar = (props) => {
    const {state} = props;

    return (
        <div className={styles.sidebar}>
            <nav>
                <ul className={styles.nav_list}>
                    <li className={styles.nav_item}>
                        <NavLink className={({isActive}) => isActive ? styles.nav_link_active : styles.nav_link}
                                 to="/profile">Profile</NavLink>
                    </li>
                    <li className={styles.nav_item}>
                        <NavLink className={({isActive}) => isActive ? styles.nav_link_active : styles.nav_link}
                                 to="/dialogs">Dialogs</NavLink>
                    </li>
                    <li className={styles.nav_item}>
                        <NavLink className={({isActive}) => isActive ? styles.nav_link_active : styles.nav_link}
                                 to="/news">News</NavLink>
                    </li>
                    <li className={styles.nav_item}>
                        <NavLink className={({isActive}) => isActive ? styles.nav_link_active : styles.nav_link}
                                 to="/music">Music</NavLink>
                    </li>
                    <li className={styles.nav_item}>
                        <NavLink className={({isActive}) => isActive ? styles.nav_link_active : styles.nav_link}
                                 to="/settings">Settings</NavLink>
                    </li>
                </ul>
            </nav>
            <FriendsList state={state.sidebar.friends} />
        </div>
    );
};

export default Navbar;