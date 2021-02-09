import { FC } from "react";
import { Row, Col } from "antd";

const Header: FC = () => {
  return (
    <Row justify="center" className="w-100 header">
      <Col span={20} lg={16} className="w-100">
        <Row justify="space-between" align="middle">
          <Col className="logo">
            <a href="/">
              <img src="https://workclass.co/static/logo-efe5298349f833cda814b9b055bb0aff.png" />
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Header;
