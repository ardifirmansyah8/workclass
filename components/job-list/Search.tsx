import { FC, useState } from "react";
import { Col, Input, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";

type Props = {
  onFilterData: (value: string, type: string) => void;
};
const Search: FC<Props> = ({ onFilterData }) => {
  const [search, setSearch] = useState<string>("");

  const handleEnter = (e: any) => {
    e.preventDefault();
    onFilterData(search, "search");
  };

  return (
    <Col span={20} lg={16}>
      <div className="mt-50">
        <form className="search-container">
          <Input
            className="search-input"
            placeholder="Job title"
            allowClear
            size="large"
            value={search}
            onChange={e => setSearch(e.target.value)}
            onPressEnter={e => handleEnter(e)}
          />
          <Button
            className="btn"
            onClick={() => onFilterData(search, "search")}
          >
            <Space align="center">
              <div>Search</div>
              <SearchOutlined />
            </Space>
          </Button>
        </form>
      </div>
    </Col>
  );
};

export default Search;
