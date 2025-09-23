import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
      {/* week-2  */}
      <li>
        <Link className="text-purple-500 underline hover:text-purple-300" href="./week-2/">
          Week 2 assignments
        </Link>
      </li>
      {/* week-3 */}
      <li>
        <Link className="text-purple-500 underline hover:text-purple-300" href="./week-3/">
          Week 3 assignments
        </Link>
      </li>

      {/* week-4 */}
      <li>
        <Link className="text-purple-500 underline hover:text-purple-300" href="./week-4/">
          Week 4 assignments
        </Link>
      </li>
      </ul>
    </div>
  );
}
