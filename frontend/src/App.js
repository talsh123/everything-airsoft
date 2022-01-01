// React Imports
import React from "react";

// Components
import PreNavbarMenu from "./components/PreNavbarMenu";
import NavbarMenu from "./components/NavbarMenu";

// Stylesheet
import "./style/App.scss";

export default function App() {
    return (
        <React.Fragment>
            <PreNavbarMenu />
            <NavbarMenu />
        </React.Fragment>
    );
}
