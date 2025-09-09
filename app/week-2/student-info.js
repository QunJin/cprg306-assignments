import React from "react";
import Link from "next/link";

export default function studentInfo() {
  return (
    <div>
      <h1>Quan Pham</h1>
      <p>
        <Link className="text-blue-600 underline hover:text-blue-300" href="https://github.com/QunJin/cprg306-assignments" target="_blank">
          Visit my GitHub Repository
        </Link>
      </p>
    </div>
  );
}
