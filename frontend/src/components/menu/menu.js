import React from "react";
import Link from "next/link";

export default function Menu() {
  return (
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
  );
}
