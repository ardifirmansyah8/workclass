import { FC } from "react";
import { useRouter } from "next/router";
import { Row, Button, Card, Typography, Skeleton } from "antd";

import { jobType } from "../../types/Types";

const { Paragraph } = Typography;

type Props = {
  job: jobType;
};

const CardJob: FC<Props> = ({ job }) => {
  const router = useRouter();

  const handleClickDetail = (id: number) => {
    router.push(`/detail/${id}`);
  };

  return (
    <Card
      className="job-card pointer"
      onClick={() => handleClickDetail(job.job_id)}
    >
      <div className="flex-column">
        <div className="relative">
          {job.logo_url !== "" ? (
            <>
              <img
                src={job.logo_url}
                alt={`Apply for ${job.title} on https://workclass.co`}
              />
              <div className="featured">Featured</div>
            </>
          ) : (
            <Skeleton.Image />
          )}
        </div>

        <div className="p-1 h-100">
          <Paragraph ellipsis className="mb-0">
            <span className="mb-0 MuseoSansCyrl900 fs-24">{job.title}</span>
          </Paragraph>
          <Paragraph ellipsis className="mb-0">
            <span className="mb-0 fs-16 color-alt capitalize">
              {job.company}
            </span>
          </Paragraph>
          <p className="MuseoSansCyrl900 fs-18 color-primary mb-2">
            {`$${job.salary_from ? job.salary_from : 0} to $${
              job.salary_to ? job.salary_to : 0
            } (${job.salary_period})`}
          </p>
          <div className="w-100 p-1 job-card-footer">
            <Row justify="space-between" align="middle">
              <div>
                <Button className="btn-apply">
                  <span className="MuseoSansCyrl900">Apply Now</span>
                </Button>
              </div>
            </Row>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardJob;
