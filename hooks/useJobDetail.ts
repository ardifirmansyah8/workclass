import { useState, useEffect } from "react";

import data from "../data/data.json";
import { jobType } from "../types/Types";

export const useDetail = (id: string | string[]): [string, jobType] => {
  const [detail, setDetail] = useState<jobType>({
    job_id: 0,
    title: "",
    company: "",
    logo_url: "",
    salary_period: "",
    salary_to: 0,
    salary_from: 0
  });
  const [title, setTitle] = useState<string>("");

  const getDetail = () => {
    const findDetail = data.find(d => d.job_id === Number(id));
    if (findDetail) {
      setDetail(findDetail);
      setTitle(findDetail.title);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return [title, detail];
};
