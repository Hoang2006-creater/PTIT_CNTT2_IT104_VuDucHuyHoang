
import { Card, Button, Row, Col } from "antd";

const { Meta } = Card;

const products = [
  {
    id: 1,
    name: "MacBook Air 2018",
    description:
      "The reason I am selling the machine is because it is too much power for what I need",
    price: "30.000.000 đ",
    image:
      "https://laptop88.vn/media/news/0204_MacAir2018.png",
  },
  {
    id: 2,
    name: "MacBook Pro 2019",
    description:
      "The reason I am selling the machine is because it is too much power for what I need",
    price: "30.000.000 đ",
    image:
      "https://laptopcuongphat.com/library/module_new/macbook-pro-2019-i5-ram-16gb-ssd-512gb-13-3inch-retina-vo-nhom-gia-re_s1658.jpg",
  },
];

export default function Ex3() {
  return (
    <Row gutter={[16, 16]}>
      {products.map((product) => (
        <Col xs={24} sm={12} md={8} key={product.id}>
          <Card
            hoverable
            cover={<img alt={product.name} src={product.image} />}
          >
            <Meta title={product.name} description={product.description} />
            <div
              style={{
                marginTop: 12,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button type="primary">Xem chi tiết</Button>
              <span style={{ fontWeight: "bold" }}>{product.price}</span>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
