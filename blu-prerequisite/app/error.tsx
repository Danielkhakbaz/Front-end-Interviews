"use client";

import { Link } from "next-view-transitions";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <div>
      <div>
        <h2>THERE IS A PROBLEM!</h2>
        <pre>{error.message}</pre>
        <p>
          Please try again. If the problem persists, fell free to contact me!
        </p>
        <div>
          <button onClick={reset}>
            Try Again
            {/* <FaArrowRotateLeft /> */}
          </button>
          <Link href="/">
            <button>
              Back to the Home
              {/* <FaHome fontSize={18} /> */}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
