import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Job } from '../types/job';
import { decode } from 'html-entities';

const fetchJobs = async () => {
  const { data } = await axios.get('https://jobicy.com/api/v2/remote-jobs');
  
  const jobs = data.jobs.map((job: Job) => ({
    ...job,
    jobTitle: decode(job.jobTitle),
    jobExcerpt: decode(job.jobExcerpt),
    companyName: decode(job.companyName),
    jobDescription: decode(job.jobDescription),
  }));
  
  return jobs;
};

export const useJobs = () => {
  return useQuery<Job[]>({
    queryKey: ['jobs'],
    queryFn: fetchJobs,
  });
};