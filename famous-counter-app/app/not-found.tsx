import { Link } from "next-view-transitions";

const NotFound = async () => {
  return (
    <div>
      <h2>NOT FOUND!</h2>
      <h3>404</h3>
      <div>
        <Link href="/">
          <button>
            Back to the Home
            {/* <FaHome fontSize={18} /> */}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
