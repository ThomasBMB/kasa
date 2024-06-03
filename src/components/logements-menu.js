import React from "react";
import "../css/logements-menu.css"
import LogementCard from "./logement-card";

function LogementsMenu() {
    return (
        <div className="logements-menu">
            <h2>Featured Listings</h2>
            <div className="grid-container">
                <LogementCard />
                <LogementCard />
                <LogementCard />
                <LogementCard />
                <LogementCard />
                <LogementCard />
            </div>
        </div>
    )
}

export default LogementsMenu