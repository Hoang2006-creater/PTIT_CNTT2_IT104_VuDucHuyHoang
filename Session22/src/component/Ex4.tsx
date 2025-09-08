import { Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item key="1">Cài đặt</Menu.Item>
    <Menu.Item key="2">Đổi mật khẩu</Menu.Item>
    <Menu.Item key="3">Đăng xuất</Menu.Item>
  </Menu>
);

export default  function Ex4() {
  return (
    <Dropdown overlay={menu} placement="bottomLeft">
      <Button>
        Nguyễn Văn Nam <DownOutlined />
      </Button>
    </Dropdown>
  );
}