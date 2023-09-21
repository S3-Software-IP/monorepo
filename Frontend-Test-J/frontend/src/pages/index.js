import { Inter } from "next/font/google";
import Top50Songs from "../components/top50songs/Top50Songs";
import HeaderGroup from "../components/header/headergroup";
import Menu from "@/components/menu/menu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="flex">
        <div className="w-1/12 bg-neutral-900"></div>
        <div className=" w-3/12 bg-neutral-700">
          <Menu />
        </div>
        <div className="w-7/12 bg-neutral-900">
          <Top50Songs />
        </div>
        <div className="w-1/12 bg-neutral-900"></div>
      </div>
    </main>
  );
}
