import { FC, useState } from "react";
import { Row, Col, Affix, Button, Drawer, Slider, InputNumber } from "antd";
import { FunnelPlotOutlined } from "@ant-design/icons";

import { salaryType } from "../../types/Types";

type Props = {
  onHandleFilter: ({ min, max }: salaryType, type: string) => void;
};

const Filter: FC<Props> = ({ onHandleFilter }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(5000);

  const handleDrawer = () => {
    setVisible(!visible);
  };

  const handleSlider = ([from, to]: number[]) => {
    setMin(from);
    setMax(to);
    onHandleFilter({ min: from, max: to }, "salary");
  };

  const handleChangeMin = (val: number) => {
    setMin(val);
    onHandleFilter({ min: val, max }, "salary");
  };

  const handleChangeMax = (val: number) => {
    setMax(val);
    onHandleFilter({ min, max: val }, "salary");
  };

  return (
    <Col span={20} lg={16}>
      <Row justify="space-between" className="mt-100">
        <h2>All Jobs</h2>

        <Affix offsetTop={100}>
          <Button
            type="primary"
            shape="round"
            className="btn-filter"
            onClick={() => handleDrawer()}
          >
            <FunnelPlotOutlined />
            Filter Jobs
          </Button>
        </Affix>
      </Row>

      <Drawer
        title="Filters"
        placement="right"
        closable={false}
        onClose={handleDrawer}
        visible={visible}
      >
        <h3>Salary Range</h3>
        <Slider
          range
          defaultValue={[0, 5000]}
          min={0}
          max={8000}
          onChange={handleSlider}
        />
        <Row justify="space-between">
          <InputNumber
            min={0}
            max={8000}
            value={min}
            onChange={handleChangeMin}
          />
          <InputNumber
            min={0}
            max={8000}
            value={max}
            onChange={handleChangeMax}
          />
        </Row>
      </Drawer>
    </Col>
  );
};

export default Filter;
