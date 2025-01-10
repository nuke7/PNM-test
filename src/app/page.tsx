'use client';

import { useState, useMemo } from 'react';
import { useJobs } from '../hooks/useJobs';
import { JobCard } from '../components/JobCard';
import { FilterSection } from '../components/FilterSection';

export default function Home() {
  const { data: jobs, isLoading, error } = useJobs();
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');

  const locations = useMemo(() => {
    if (!jobs) return [];
    return Array.from(new Set(jobs.map((job) => job.jobGeo))).sort();
  }, [jobs]);

  const industries = useMemo(() => {
    if (!jobs) return [];
    return Array.from(new Set(jobs.map((job) => job.jobIndustry[0]))).sort();
  }, [jobs]);

  const filteredJobs = useMemo(() => {
    if (!jobs) return [];
    return jobs.filter((job) => {
      const locationMatch = !selectedLocation || job.jobGeo === selectedLocation;
      const industryMatch = !selectedIndustry || job.jobIndustry[0] === selectedIndustry;
      return locationMatch && industryMatch;
    });
  }, [jobs, selectedLocation, selectedIndustry]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">Loading jobs...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center text-red-600">
            Error loading jobs. Please try again later.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Remote Jobs</h1>
        
        <FilterSection
          locations={locations}
          industries={industries}
          selectedLocation={selectedLocation}
          selectedIndustry={selectedIndustry}
          onLocationChange={setSelectedLocation}
          onIndustryChange={setSelectedIndustry}
        />

        <div className="grid gap-6 md:grid-cols-2">
        {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))
          ) : (
            <div className="md:col-span-2 p-8 text-center bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600">
                No jobs match your selected filters. Try adjusting your location or industry selection.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}