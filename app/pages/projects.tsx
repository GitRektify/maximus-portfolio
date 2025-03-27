import Link from "next/link";

const projects = [
  { title: "React Native App", link: "https://github.com/yourusername/project1" },
  { title: "Next.js Portfolio", link: "https://github.com/yourusername/project2" },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <Link key={index} href={project.link}>
            <a className="block bg-gray-800 p-4 rounded-lg">{project.title}</a>
          </Link>
        ))}
      </div>
    </div>
  );
}
