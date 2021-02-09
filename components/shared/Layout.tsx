import { FC, ReactElement } from "react";
import { Row } from "antd";

import Header from "./Header";
import Breadcrumbs from "./Breadcrumbs";

type Props = {
  children: ReactElement;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />

      <Row justify="center" className="mt-70">
        {children}
      </Row>
    </>
  );
};

export default Layout;
