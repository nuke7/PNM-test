import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Job } from '../types/job';

const fetchJobs = async () => {
  const { data } = await axios.get('https://jobicy.com/api/v2/remote-jobs');
  return data.jobs;
};

export const useJobs = () => {
  return useQuery<Job[]>({
    queryKey: ['jobs'],
    queryFn: fetchJobs,
  });
};