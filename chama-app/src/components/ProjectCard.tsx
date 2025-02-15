import { FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 border hover:shadow-lg transition">
      <h2 className="text-lg font-semibold text-gray-900">{project.name}</h2>
      <p className="text-sm text-gray-600 mt-1">{project.description}</p>
      <div className="flex items-center justify-between mt-4">
        <span className="text-sm font-medium text-primary">{project.status}</span>
        <a href={`/projects/${project._id}`} className="text-primary text-sm flex items-center">
          View <FaExternalLinkAlt className="ml-1" />
        </a>
      </div>
    </div>
  );
}
