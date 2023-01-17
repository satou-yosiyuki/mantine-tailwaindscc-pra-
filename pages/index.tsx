import { Inter } from "@next/font/google";
import { Button } from "@mantine/core";
import "tailwindcss/tailwind.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">You can use Tailwind</h1>
      <h1 className="text-6xl font-bold">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <Button variant="light" color="violet" size="xl">
        Setting
      </Button>

      <Button
        variant="light"
        color="indigo"
        radius="md"
        size="xl"
        disabled
        compact
        uppercase
      >
        Setting
      </Button>

      <Button variant="outline" color="teal" size="md">
        Settings
      </Button>
    </>
  );
}
