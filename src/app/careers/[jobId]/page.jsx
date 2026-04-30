import CareersJD from "../../../components/careers/career-jd";
import { notFound } from "next/navigation";

const jobs = [
  {
    id: "4a12f445afc86155",
    title: "Executive - HR & Administration",
    location: "onsite, Kausani",
    type: "Full-time",
    experience: "1-3 years of experience in administration and HR.",
    description: "Support administrative and HR functions, ensuring efficient office operations and workforce management.",
    about: "Are you an organized and proactive individual with a passion for administration and human resources? Join our team and play a key role in ensuring smooth office operations and effective HR management. This position is for our branch office at Kausani.",
    responsibilities: [
      "Handle day-to-day office administration and facility management.",
      "Assist in recruitment, onboarding, and employee engagement activities..",
      "Maintain HR records, payroll coordination, and compliance documentation.",
      "Manage vendor coordination, office supplies, and travel arrangements.",
      "Implement and optimize HRMS and administrative tools for efficiency.",
      "Ensure adherence to company policies and HR best practices.",
    ],
    requirements: [
      "Bachelor's degree in HR, Business Administration, or a related field.",
      "1-3 years of experience in administration and HR.",
      "Strong organizational and multitasking skills.",
      "Proficiency in Microsoft 365 and HR software.",
      "Please mention “Position - Kausani Branch” in the subject line.",
    ],
    whyJoin: [
      "Gain hands-on experience in HR and administration.",
      "Work in a dynamic and growth-oriented environment.",
      "Opportunity to implement tech-driven HR solutions.",
    ],
    link: "",
  },
];


export default function JobDetailsPage({ params }) {
  const job = jobs.find((j) => j.id === params.jobId);

  if (!job) return notFound();

  return <CareersJD job={job} />;
}
