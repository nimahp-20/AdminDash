import React from "react";
import Avatar from "@mui/material/Avatar";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { deepOrange } from "@mui/material/colors";
import "./WidgetSm.css";
import { newMembers } from "../../datas";
export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Members</span>
      <ul className="widgetSmList">
        {newMembers.map((user) => (
          <li className="widgetSmListItem">
            <Avatar
              className="widgetSmAvatar"
              sx={{ bgcolor: deepOrange[500], width: 40, height: 40 }}
            >
              {user.img ? <img className="widgetSmImg" src={user.img} alt={user.username} /> : user.img}
            </Avatar>
            <div className="widgetSmUser">
              <span className="WidgetSmUserName">{user.username}</span>
              <span className="widgetUserTitle">{user.title}</span>
            </div>
            <button className="widgetSmBtn">
              <VisibilityIcon className="widgetSmIcon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
