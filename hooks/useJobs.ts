import { useState, useEffect } from "react";

import data from "../data/data.json";
import { jobType, salaryType } from "../types/Types";

export const useJobList = (): [
  boolean,
  number,
  number,
  jobType[],
  (page: number) => void,
  (value: string) => void
] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [jobs, setJobs] = useState<jobType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalData, setTotalData] = useState<number>(0);

  const getJobList = (pageNum: number, source?: jobType[]) => {
    const rawData = source ? source : data;

    setLoading(true);
    const nextPageData = rawData.slice((pageNum - 1) * 12, 12 * pageNum);
    setPage(pageNum);
    setJobs(nextPageData);
    setTotalData(rawData.length);

    setTimeout(() => setLoading(false), 1000);
  };

  const onFilterData = (value: string | salaryType, type: string) => {
    let filteredData = [];

    if (type === "search") {
      filteredData = data.filter(
        d => d.title.search(new RegExp(`\\b${value}\\b`, "i")) > -1
      );
    }

    if (type === "salary") {
      const { min, max } = value as salaryType;
      filteredData = data.filter(
        d => d.salary_from >= min && d.salary_to <= max
      );
    }

    console.log(filteredData);

    if (filteredData.length > 0) {
      getJobList(1, filteredData);
    } else {
      setJobs([]);
    }
  };

  useEffect(() => {
    getJobList(1);
  }, []);

  return [loading, page, totalData, jobs, getJobList, onFilterData];
};
