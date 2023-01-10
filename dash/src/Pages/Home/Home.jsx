import React from "react";
import Chart from "../../Components/Chart/Chart";
import Features from "../../Components/Features/Features";
import "./Home.css";

import { xAsxisData } from "../../datas";
import WidgetSm from "../../Components/WidgetSM/WidgetSm";
import WidgetLg from "../../Components/WidgetLG/WidgetLg";
export default function Home() {
  return (
    <div className="home">
      <Features />
      <Chart grid title="Month Sale" data={xAsxisData} dataKey="sale" />
      <div className="homeWidget">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
