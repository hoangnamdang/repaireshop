import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black bg-home bg-cover bg-center">
      <main className="flex flex-col justify-center items-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl sm:text-2xl text-white bg-black/90 w-4/5 sm:max-w-90">
          <h1 className="text-4xl">Repair shop</h1>
          <address>123 Quang Trung, HCM</address>
          <p>Open daily 9am - 5pm</p>
          <Link href={"tel:123456789"} className="hover:underline">
            123-456-789
          </Link>
        </div>
      </main>
    </div>
  );
}
