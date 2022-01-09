import React, { useEffect } from "react";
import Sidebar from "../Sidebar";
import Dashboard from "../Dashboard";
import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import { ThemeProvider } from "@emotion/react";
import { useDispatch } from "react-redux";
import { fetchStocks } from "../redux/actions/stockActions";

function Desktop() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStocks());
    }, []);

    const theme = createTheme({
        typography: {
            fontFamily: ["Exo", "Roboto"].join(",")
        },
        palette: {
            primary: {
                main: purple[800]
            },
            secondary: {
                main: green[500]
            }
        }
    });
    return (
        <ThemeProvider theme={theme}>
            <div className="desktop-container">
                <Sidebar />
                <Dashboard />
            </div>
        </ThemeProvider>
    );
}

export default Desktop;
