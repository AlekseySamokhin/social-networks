import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.header_img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png" />
        </header>
    );
};

export default Header;