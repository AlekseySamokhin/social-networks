import { NavLink } from "react-router-dom";

import styles from "./DialogItem.module.css";

const DialogItem = (props) => {
    const { id, name } = props;
    const path = `/dialogs/${id}`;

    return (
        <div id={id} className={styles.dialogs_item}>
            <NavLink
                className={({isActive}) =>
                    isActive
                        ? styles.dialogs_link_active
                        : styles.dialogs_link }
                to={path}>
                    {name}
            </NavLink>
        </div>
    );
}

export default DialogItem;