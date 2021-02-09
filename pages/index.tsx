import { FC } from "react";
import { Row, Col, Pagination } from "antd";

import Layout from "../components/shared/Layout";
import Breadcrumbs from "../components/shared/Breadcrumbs";
import Search from "../components/job-list/Search";
import Filter from "../components/job-list/Filter";
import SkeletonList from "../components/job-list/SkeletonList";
import CardJob from "../components/job-list/CardJob";
import { useJobList } from "../hooks/useJobs";

const Home: FC = () => {
  const [
    loading,
    page,
    totalData,
    jobs,
    getJobList,
    onFilterData
  ] = useJobList();

  const onPageChange = (val: number) => {
    getJobList(val);
  };

  return (
    <Layout>
      <>
        <Breadcrumbs />

        <Search onFilterData={onFilterData} />

        <Filter onHandleFilter={onFilterData} />

        <Col span={20} lg={16} className="mb-10">
          <Row justify="space-between" className="jobs">
            <Col span={24} className="p-jobs">
              <div className="jobs-grid">
                {loading &&
                  Array.from(Array(12).keys()).map(i => (
                    <SkeletonList key={i} />
                  ))}
                {!loading &&
                  jobs.map(job => <CardJob key={job.job_id} job={job} />)}
              </div>
            </Col>

            {!loading && (
              <Col span={24} className="p-jobs">
                <Row justify="center">
                  <Pagination
                    defaultCurrent={1}
                    current={page}
                    pageSize={12}
                    total={totalData}
                    showSizeChanger={false}
                    onChange={onPageChange}
                  />
                </Row>
              </Col>
            )}
          </Row>
        </Col>
      </>
    </Layout>
  );
};

export default Home;
