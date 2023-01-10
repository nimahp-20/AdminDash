/* eslint-disable no-unused-vars */
import { useState } from "react";
import { usersRows } from "../../datas";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import './UserList.css'
export default function UserList() {
  const [usersData, setUsersData] = useState(usersRows);

  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    {
      field: "username",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="/">
            <div className="userListUser">{params.row.username}</div>
          </Link>
        );
      },
    },
    { field: "title", headerName: "Title", width: 200 },
    { field: "status", headerName: "Status", width: 200 },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={usersData}
        columns={columns}
        disableSelectionOnClick
        pageSize={10}
      />
    </div>
  );
}
