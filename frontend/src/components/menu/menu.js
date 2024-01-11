import React from "react";
import Link from "next/link";
import { DeleteAllSnapshots } from "@/api/snapshot-service";
import { useRouter } from "next/router";

export default function Menu() {
  const router = useRouter();
  const removeSnapshots = async () => {
    const bevestiging = window.confirm(
      "Are you sure you want to delete your data?"
    );
    if (bevestiging) {
      const apiData = await DeleteAllSnapshots();
      router.push("/logout");
      return apiData;
    } else
      (error) => {
        console.error("Error removing snapshot data:", error);
      };
  };

  return (
    <div>
      <div className="flex flex-col mx-5 my-10 text-white bg-blue-500 rounded-lg divide-y-2 divide-blue-600 divide-dotted content-center ">
        <div>
          <div className="p-4">
            To review how we use your data, please refer to our{" "}
            <Link href="/privacy" className="underline decoration-green-400">
              privacy policy
            </Link>
            .
          </div>
        </div>
        <div>
          <div className="p-4">Wow.. these are your songs? They suck..</div>
        </div>
      </div>
      <div className="flex flex-col mx-5 my-10 text-white bg-red-500 rounded-lg divide-y-2 divide-red-600 divide-dotted content-center ">
        <div>
          <div className="p-4">
            To remove all your stored data,{" "}
            <Link
              onClick={removeSnapshots}
              href="/"
              className="underline decoration-white-400"
            >
              click here
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
