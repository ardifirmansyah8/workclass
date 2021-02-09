export type jobType = {
  job_id: number;
  title: string;
  company: string;
  logo_url: string;
  salary_period: string;
  salary_to: number;
  salary_from: number;
};

export type salaryType = { min: number; max: number };
