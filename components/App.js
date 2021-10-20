import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function App() {
    return (
        <div>
            <div className="header">
                <div className="title">
                    Hi Suparman
                    <div className="greet">Have a great day !</div>
                </div>

                <div className="icons">
                    <AccountCircleIcon />
                    <NotificationsNoneIcon />
                </div>
            </div>
        </div>
    );
}

export default App;
