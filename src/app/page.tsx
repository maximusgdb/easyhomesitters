import Image from "next/image";

const cleaners = [
  { id: 'alice', name: 'Alice', experience: 5, rating: 4.8 },
  { id: 'carlos', name: 'Carlos', experience: 3, rating: 4.5 },
  { id: 'fatima', name: 'Fatima', experience: 4, rating: 4.7 },
  { id: 'sophie', name: 'Sophie', experience: 2, rating: 4.3 },
  { id: 'marco', name: 'Marco', experience: 6, rating: 4.9 },
  { id: 'linda', name: 'Linda', experience: 1, rating: 4.1 },
  { id: 'yuki', name: 'Yuki', experience: 7, rating: 4.6 },
  { id: 'samir', name: 'Samir', experience: 3, rating: 4.2 },
  { id: 'elena', name: 'Elena', experience: 5, rating: 4.4 },
];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center w-full">Available Cleaners</h1>
        <ul className="w-full flex flex-col gap-6">
          {cleaners.map((cleaner, idx) => (
            <li key={idx} className="bg-white dark:bg-neutral-900 rounded-lg shadow p-6 flex flex-col sm:flex-row sm:items-center gap-4 border border-neutral-200 dark:border-neutral-800">
              <div className="flex-1">
                <div className="text-xl font-semibold">{cleaner.name}</div>
                <div className="text-yellow-500 font-medium">Rating: {cleaner.rating} ⭐</div>
                <div className="text-neutral-600 dark:text-neutral-300 mt-1">{cleaner.experience} years of experience</div>
              </div>
            </li>
          ))}
        </ul>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
