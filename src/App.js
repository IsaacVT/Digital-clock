import React from "react";
import { Container } from "@mui/material";
import "./index.css";
import { ShowTime } from "./components/ShowTime";

function App() {
    return (
        <Container className="container" style={{ display: "flex" }}>
            <ShowTime />
        </Container>
    );
}

export default App;
