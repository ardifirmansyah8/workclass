import { FC } from "react";
import { useRouter } from "next/router";
import { Row, Col, Button, Skeleton } from "antd";

import Layout from "../../components/shared/Layout";
import Breadcrumbs from "../../components/shared/Breadcrumbs";
import { useDetail } from "../../hooks/useJobDetail";

const JobDetail: FC = () => {
  const { query } = useRouter();
  const [title, detail] = useDetail(query.id);

  return (
    <Layout>
      <Col span={20} lg={16}>
        <Row justify="space-between" className="jobs-detail">
          <Breadcrumbs title={title} span={24} className="p-8" />

          <Col xs={24} md={16} className="p-8">
            <h1 className="fs-30">{detail.title}</h1>
            <p>{detail.company}</p>
            <p>
              {`$${detail.salary_from ? detail.salary_from : 0} to $${
                detail.salary_to ? detail.salary_to : 0
              } (${detail.salary_period})`}
            </p>
            <Button className="btn-apply">
              <span className="MuseoSansCyrl900">Apply Now</span>
            </Button>
          </Col>

          <Col xs={24} md={8} className="p-8">
            <div className="jobs-detail-logo">
              {detail.logo_url !== "" ? (
                <img
                  src={detail.logo_url}
                  alt={`Apply for ${detail.title} on https://workclass.co`}
                />
              ) : (
                <Skeleton.Image />
              )}
            </div>
          </Col>
        </Row>
      </Col>
    </Layout>
  );
};

export default JobDetail;
