import Link from "next/link";

const jobs = [
  {
    id: "4a12f445afc86155",
    title: "Executive - HR & Administration",
    location: "Onsite - Kausani Branch",
    type: "Full-time",
  },
];

export default function CareersFront() {
  return (
    <div className="min-h-screen text-gray-900">
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-2 mt-8">Join Our Team</h1>
        <p className="text-lg">
          Be part of an innovative and passionate team. Let&apos;s build
          something amazing together.
        </p>
      </div>

      <div className="max-w-4xl mx-auto my-10 mt-16 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Open Positions</h2>
        <div className="space-y-4">
          {jobs.map((job) => (
            <Link key={job.id} href={`/careers/${job.id}`}>
              <div className="block p-4 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer mb-10">
                <h3 className="text-xl font-medium">{job.title}</h3>
                <p className="text-gray-600">
                  {job.location} - {job.type}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
