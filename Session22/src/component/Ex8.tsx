import { Form, Input, Button, Row, Col, Select, Typography } from "antd";

const { Title } = Typography;
const { Option } = Select;

function Ex8() {
  const onFinish = (values: unknown) => {
    console.log("Form values:", values);
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 24 }}>
      <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>
        Đăng ký tài khoản
      </Title>
      <Form layout="vertical" onFinish={onFinish}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Vui lòng nhập email!" }]}
            >
              <Input placeholder="Nhập email" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
            >
              <Input.Password placeholder="Nhập mật khẩu" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="Họ và tên"
          name="fullname"
          rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}
        >
          <Input placeholder="Ví dụ: Nguyễn Văn A" />
        </Form.Item>

        <Form.Item
          label="Địa chỉ"
          name="address"
          rules={[{ required: true, message: "Vui lòng nhập địa chỉ!" }]}
        >
          <Input placeholder="Ví dụ: Thanh Xuân, Hà Nội" />
        </Form.Item>

        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              label="Thành phố"
              name="city"
              rules={[{ required: true, message: "Chọn thành phố!" }]}
            >
              <Select defaultValue="Hà Nội">
                <Option value="Hà Nội">Hà Nội</Option>
                <Option value="Hồ Chí Minh">Hồ Chí Minh</Option>
                <Option value="Đà Nẵng">Đà Nẵng</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Quận"
              name="district"
              rules={[{ required: true, message: "Chọn quận!" }]}
            >
              <Select defaultValue="Thanh Xuân">
                <Option value="Thanh Xuân">Thanh Xuân</Option>
                <Option value="Hoàn Kiếm">Hoàn Kiếm</Option>
                <Option value="Cầu Giấy">Cầu Giấy</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Mã bưu điện"
              name="zipcode"
              rules={[{ required: true, message: "Nhập mã bưu điện!" }]}
            >
              <Input/>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Ex8;
