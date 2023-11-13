import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function HeaderGroup() {
  return (
    <>
      <header className="h-10 bg-blue-500 flex flex-row justify-center  items-center text-white">
        <span className="justify-self-start">
          <Link href="/">SpottedCharts</Link>
        </span>
        <button className="mx-10" variant="text">
          <Link href="/">Home</Link>
        </button>
        <button className="mx-10" variant="text">
          <Link href="/logout">Logout</Link>
        </button>
      </header>
    </>
  );
}
