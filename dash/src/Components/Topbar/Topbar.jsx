import React from "react";
import "./Topbar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { deepOrange, deepPurple } from "@mui/material/colors";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">BI DashBoard </span>
          <DashboardIcon
            className="dashlogo"
            sx={{
              color: deepPurple[400],
              width: 40,
              height: 40,
              marginLeft: 2,
            }}
          />
        </div>
        <div className="topRight">
          <div className="topbarIconsContainer">
            <NotificationsIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconsContainer">
            <LanguageIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconsContainer">
            <SettingsIcon />
          </div>
          <Avatar
            className="topAvatar"
            sx={{ bgcolor: deepOrange[500], width: 40, height: 40 }}
          >
            N
          </Avatar>
        </div>
      </div>
    </div>
  );
}
