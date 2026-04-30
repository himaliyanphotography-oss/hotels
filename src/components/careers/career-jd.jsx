import React from "react";
import MagicButton from "../ui/maginButton";
import Link from "next/link";
export default function CareersJD({ job }) {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <div className="bg-gray-900 w-full py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-4 mt-16">
            {job.title}
          </h1>
          <div className="flex flex-wrap items-center text-gray-300 space-x-4 mt-2">
            <div className="flex items-center">
              <span className="mr-2">⏱</span>
              <span>{job.experience}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">📍</span>
              <span>{job.location}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">📋</span>
              <span>{job.type}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row py-8 px-6 w-full gap-8">
        <div className="md:w-2/3 flex flex-col">
          <h3 className="text-xl font-semibold mt-4">About Us:</h3>
          <p className="text-gray-400 mb-4">{job.about}</p>
          <h3 className="text-xl font-semibold mt-4">Description:</h3>
          <p className="text-gray-400 mb-4">{job.description}</p>
          <h3 className="text-xl font-semibold mt-4">Responsibilities:</h3>
          <ul className="list-disc pl-5 text-gray-400">
            {job.responsibilities.map((resp, index) => (
              <li key={index} className="mt-1">
                {resp}
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mt-4">Requirements:</h3>
          <ul className="list-disc pl-5 text-gray-400">
            {job.requirements.map((req, index) => (
              <li key={index} className="mt-1">
                {req}
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mt-4">Why Join Us:</h3>
          <ul className="list-disc pl-5 text-gray-400">
            {job.whyJoin.map((point, index) => (
              <li key={index} className="mt-1">
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:w-1/3">
          <div className="sticky top-6 mt-6">
            <a target="_blank" href={job.link} rel="noreferrer">
              <MagicButton className="w-32" title={"Apply for this job"}>
                Apply for this job
              </MagicButton>
            </a>
            <Link href="/careers/" className="your-styles-here">
              View Jobs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
