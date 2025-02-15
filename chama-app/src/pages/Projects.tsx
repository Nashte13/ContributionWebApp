import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProjectCard from "../components/ProjectCard";

const fetchProjects = async () => {
  const { data } = await axios.get("/api/projects");
  return data;
};

export default function ProjectsPage() {
  const { data: projects, isLoading, isError } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  if (isLoading) return <p className="text-center text-gray-500">Loading projects...</p>;
  if (isError) return <p className="text-center text-red-500">Failed to load projects.</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Chama Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects?.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
}
