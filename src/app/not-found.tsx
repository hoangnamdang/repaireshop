import Link from "next/link";
import Image from "next/image";
export const metadata = {
  title: "Page not found",
};
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <Image
        src={"/404-error.avif"}
        alt="Not Found"
        width={400}
        height={300}
        className="mb-8"
      />

      <Link
        href="/"
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
