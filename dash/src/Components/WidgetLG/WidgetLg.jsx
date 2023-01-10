import React from "react";
import "./WidgetLg.css";
import Avatar from "@mui/material/Avatar";
import { transActions } from "../../datas";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">TransAction</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {transActions.map((item) => (
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <Avatar >
                {item.img ? (
                  <img
                    className="widgetLgImg"
                    src={item.img}
                    alt={item.customer}
                  />
                ) : (
                  item.img
                )}
              </Avatar>

              <span className="widgetLgName">{item.customer}</span>
            </td>
            <td className="widgetLgDate">{item.date}</td>
            <td className="widgetLgAmount">{item.amount}$</td>

            <td className="widgetLgStatus">
              <Button type={item.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
