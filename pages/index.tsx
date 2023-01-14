import { Inter } from "@next/font/google";
import { Button } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">You can use Tailwind</h1>
      <Button variant="outline" color="teal" size="md">
        Settings
      </Button>
    </>
  );
}
