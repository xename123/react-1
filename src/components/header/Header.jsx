import React from "react";
import { Link } from "react-router-dom";

import logo from "../../img/logo.png";
import shape from "../../img/decor/shape.svg";
import s from "./Header.module.scss";

import Button from "../UI/button/Button";
const Header = () => {
    return (
        <header className={s.header}>
            <div className="_container">
                <Link className={s.logo} to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <ul className={s.list}>
                    <li>
                        <Link to="/signIn">
                            <Button classNames={["transparent"]}>
                                Sign in
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/signUp">
                            <Button>Sign up</Button>
                        </Link>
                    </li>
                </ul>
            </div>
            <img src={shape} className={s.shape} />
        </header>
    );
};

export default Header;
