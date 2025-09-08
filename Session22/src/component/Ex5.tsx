import { Alert } from "antd";

export default function Ex5() {
  return (
    <div style={{ width: 400 }}>
      <Alert
        message="Thêm tài khoản thành công."
        type="success"
        closable
        showIcon={false}
        style={{ marginBottom: 12 }}
      />
      <Alert
        message="Thêm mới tài khoản thất bại."
        type="error"
        closable
        showIcon={false}
        style={{ marginBottom: 12 }}
      />
      <Alert
        message="Tên không được để trống."
        type="warning"
        closable
        showIcon={false}
      />
    </div>
  );
}


