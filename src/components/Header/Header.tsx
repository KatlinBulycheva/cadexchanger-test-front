import { FC } from "react";
import styles from "./Header.module.css";

export const Header: FC = () => {
    return (
        <header className={styles.header}>
            <h1>Cone creator</h1>
        </header>
    )
}