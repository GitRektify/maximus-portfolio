import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Hello, I'm [Your Name]</h1>
        <p className="mt-4 text-lg">React Native | Next.js | iOS Developer</p>
        <Link href="/projects">
          <a className="mt-6 inline-block bg-blue-500 px-6 py-3 rounded-lg text-lg">
            View My Work
          </a>
        </Link>
      </div>
    </div>
  );
}
