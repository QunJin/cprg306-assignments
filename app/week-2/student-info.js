import React from "react";
import Link from "next/link";

export default function studentInfo() {
  return (
    <div>
      <h1>QunJin</h1>
      <p>
        <Link className="bg-blue-900 text-white p-2 rounded hover:bg-blue-500" href="https://github.com/QunJin/cprg306-assignments" target="_blank">
          Visit my GitHub Repository
        </Link>
      </p>
    </div>
  );
}
