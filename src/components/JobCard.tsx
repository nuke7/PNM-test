'use client';

import Image from 'next/image';
import { Job } from '../types/job';

interface JobCardProps {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        {job.companyLogo && (
          <div className="w-16 h-16 relative">
            <Image
              src={job.companyLogo}
              alt={`${job.companyName} logo`}
							width={48}
							height={48}
              className="object-contain"
            />
          </div>
        )}
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-900">{job.jobTitle}</h2>
          <p className="text-gray-600 mt-1">{job.companyName}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {job.jobType}
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              {job.jobLevel}
            </span>
            {job.jobGeo && (
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                {job.jobGeo}
              </span>
            )}
          </div>
          <p className="mt-3 text-gray-600">{job.jobExcerpt}</p>
          {(job.annualSalaryMin || job.annualSalaryMax) && (
            <p className="mt-2 text-gray-700">
              Salary: {job.annualSalaryMin && `${job.annualSalaryMin}`}
              {job.annualSalaryMin && job.annualSalaryMax && ' - '}
              {job.annualSalaryMax && `${job.annualSalaryMax}`}
              {job.salaryCurrency && ` ${job.salaryCurrency}`}
            </p>
          )}
          <a
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-blue-600 hover:text-blue-800"
          >
            View Job →
          </a>
        </div>
      </div>
    </div>
  );
};