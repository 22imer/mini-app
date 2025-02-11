import React, { useState } from "react";
import { BottomNavigation, Icon } from "zmp-ui";

const BottomNav = () => {
  const [activeTab, setActiveTab] = useState("chat");

  return (
    <BottomNavigation fixed activeKey={activeTab} onChange={setActiveTab}>
      <BottomNavigation.Item
        key="home"
        label="Trang Chủ"
        icon={<Icon icon="zi-home" />}
        activeIcon={<Icon icon="zi-home" />}
        linkTo="/"
      />
      <BottomNavigation.Item
        key="news"
        label="Ưu Đãi"
        icon={<Icon icon="zi-note" />}
        activeIcon={<Icon icon="zi-note" />}
        linkTo="/news"
      />
      <BottomNavigation.Item
        key="calender"
        label="Lịch hẹn"
        icon={<Icon icon="zi-calendar" />}
        activeIcon={<Icon icon="zi-calendar-solid" />}
        linkTo="/ticket"
      />
      <BottomNavigation.Item
        key="me"
        label="Cá nhân"
        icon={<Icon icon="zi-user" />}
        activeIcon={<Icon icon="zi-user-solid" />}
        linkTo="/profile"
      />
    </BottomNavigation>
  );
};

export default BottomNav;