import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1 className="text-4xl md:text-6xl font-bold">darty.live</h1>
        <p className="text-xl text-center max-w-2xl">
          Connect with random people through video chat. Like Omegle, but
          better.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white gap-2 font-medium text-lg h-14 px-8 w-64 sm:w-auto"
            href="/chat"
          >
            Start Video Chat
          </Link>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">How it works</h2>
          <ol className="list-decimal text-left max-w-md mx-auto space-y-4 text-lg">
            <li>Click the "Start Video Chat" button</li>
            <li>Allow camera and microphone permissions</li>
            <li>Wait to be matched with a random person</li>
            <li>Start chatting!</li>
          </ol>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-gray-500">
        <p>© 2023 darty.live - Random Video Chat</p>
      </footer>
    </div>
  );
}
