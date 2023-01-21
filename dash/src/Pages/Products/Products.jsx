/* eslint-disable no-unused-vars */
import { useState } from "react";
import { products } from "../../datas";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./Products.css";

export default function ProductList() {
  const [productData, setProductsData] = useState(products);

  const productDelete = (userID) => {
    setProductsData(
      productData.filter((user) => {
        return user.id !== userID;
      })
    );
  };

  const Button = ({ type }) => {
    return <button className={"productListStatus " + type}>{type}</button>;
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "avatar",
      headerName: "Product",
      width: 150,
      renderCell: (params) => {
        return (
          <Link to="/" className="link">
            <Avatar>
              {params.row.avatar ? (
                <img
                  className="productListAvatar"
                  src={params.row.avatar}
                  alt={params.row.title}
                />
              ) : (
                <Avatar />
              )}
            </Avatar>
          </Link>
        );
      },
    },
    { field: "title", headerName: "Title", width: 150 },
    {
      field: "price",
      headerName: "Price",
      width: 150,
      renderCell: (params) => {
        return <p>{params.row.price} $</p>;
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: (params) => {
        return <Button type={params.row.status} />;
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`} className="link">
              <button className="productsListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="productsListDelete"
              onClick={() => productDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={productData}
        columns={columns}
        disableSelectionOnClick
        pageSize={9}
        checkboxSelection
      />
    </div>
  );
}
