import { Inter } from "next/font/google";
import Top50Group from "@/components/leaderboards/ranking-base";
import HeaderGroup from "@/components/header/headergroup";
import Menu from "@/components/menu/menu";
import Auth from "@/components/auth/auth";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Auth />
      <HeaderGroup />
      <div className="flex flex-row">
        <div className="w-1/12 bg-neutral-900"></div>
        <div className=" w-3/12 bg-neutral-700">
          <Menu />
        </div>
        <div className="w-8/12 bg-neutral-900 min-h-screen  ">
          <Top50Group />

          <div className="w-1/12 bg-neutral-900"></div>
        </div>
      </div>
    </main>
  );
}
