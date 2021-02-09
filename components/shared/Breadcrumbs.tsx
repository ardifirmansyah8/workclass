import { FC } from "react";
import { Col, Breadcrumb } from "antd";

type Props = {
  title?: string;
  span?: number;
  className?: string;
};

const Breadcrumbs: FC<Props> = ({ title, span = 20, className }) => {
  return (
    <Col span={span} lg={16} className={className}>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          {title ? <a href="/">Jobs</a> : "Jobs"}
        </Breadcrumb.Item>
        {title && <Breadcrumb.Item>{title}</Breadcrumb.Item>}
      </Breadcrumb>
    </Col>
  );
};

export default Breadcrumbs;
