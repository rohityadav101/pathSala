import React from "react";
import WelcomeScreen from "../WelcomeScreen";
import UserInfo from "../UserInfo";
import UpComing from "../UpComing";
import DownLoad from "../DownLoad";

export default function Dashboard() {
  return (
    <div>
      <WelcomeScreen />
      <UserInfo />
      <UpComing head="Upcoming Events" />
      <DownLoad />
      <UpComing head="News & blogs" />
    </div>
  );
}
