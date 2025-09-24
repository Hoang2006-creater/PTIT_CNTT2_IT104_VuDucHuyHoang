import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store/Menu";
import { toggleMenu } from "../slice/menuSlice";

import {
  DashboardOutlined,
  UserOutlined,
  DollarOutlined,
  BarChartOutlined,
  FileTextOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

export default function MenuBar() {
  const collapsed = useSelector((state: RootState) => state.menu.collapsed);
  const dispatch = useDispatch<AppDispatch>();

  const items = [
    { icon: <DashboardOutlined />, label: "Bảng điều khiển" },
    { icon: <UserOutlined />, label: "Tài khoản" },
    { icon: <DollarOutlined />, label: "Tài sản" },
    { icon: <BarChartOutlined />, label: "Thống kê" },
    { icon: <FileTextOutlined />, label: "Tài liệu" },
  ];

  return (
    <div
      style={{
        width: collapsed ? "60px" : "200px",
        background: "#001529",
        color: "#fff",
        height: "100vh",
        transition: "all 0.3s",
        display: "flex",
        flexDirection: "column",
        padding: "10px 0",
      }}
    >
      <div style={{ flex: 1 }}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 16px",
              cursor: "pointer",
              color: "#fff",
            }}
          >
            {item.icon}
            {!collapsed && <span>{item.label}</span>}
          </div>
        ))}
      </div>
      <div
        onClick={() => dispatch(toggleMenu())}
        style={{
          padding: "12px 16px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        {!collapsed && <span>Thu gọn</span>}
      </div>
    </div>
  );
}
