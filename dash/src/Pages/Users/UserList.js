/* eslint-disable no-unused-vars */
import { useState } from "react";
import { usersRows } from "../../datas";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import "./UserList.css";



export default function UserList() {
  const [usersData, setUsersData] = useState(usersRows);

  const userDelete = (userID) => {
    setUsersData(usersData.filter(user => {
      return user.id !== userID
    }))
  }

  const Button = ({ type }) => {
    return <button className={"userListStatus " + type}>{type}</button>;
  };
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "username",
      headerName: "User",
      width: 180,
      renderCell: (params) => {
        return (
          <Link to="/" className="link userListUser">
            <Avatar>
              {params.row.avatar ? (
                <img
                  className="userListAvatar"
                  src={params.row.avatar}
                  alt={params.row.username}
                />
              ) : (
                <Avatar />
              )}
            </Avatar>
            <h5 className="userListUsername">{params.row.username}</h5>
          </Link>
        );
      },
    },

    { field: "realname", headerName: "RealName", width: 200 },
    { field: "title", headerName: "Title", width: 200 },
    { field: "email", headerName: "Email", width: 300 },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: (params) => {
        return <Button type={params.row.status} />;
      },
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`} className='link'>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => userDelete(params.row.id)}
            />
          </>
        )
      }
    }
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
