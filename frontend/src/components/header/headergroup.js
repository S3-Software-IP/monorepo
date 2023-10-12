import React, { useState, useEffect } from "react";

export default function HeaderGroup() {
  return (
    <>
      <header className="h-10 bg-blue-800 flex flex-row justify-center">
        <span className="justify-self-start">FunProjectName1</span>
        <button className="mx-10" variant="text">
          Home
        </button>
        <button className="mx-10" variant="text">
          Statistics
        </button>
        <button className="mx-10" variant="text">
          Menu items yippie
        </button>
      </header>
    </>
  );
}
