import { FC } from "react";
import { Card, Skeleton } from "antd";

const SkeletonList: FC = () => {
  return (
    <Card className="job-card pointer">
      <div className="flex-column">
        <div className="relative">
          <Skeleton.Image />
        </div>

        <div className="p-1 h-100">
          <Skeleton active />
        </div>
      </div>
    </Card>
  );
};

export default SkeletonList;
