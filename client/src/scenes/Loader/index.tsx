import HashLoader from "react-spinners/HashLoader";

const Loader = ({ margin }) => {
  return (
    <HashLoader
      color="gray"
      cssOverride={{ display: "block", margin: margin, borderColor: "gray" }}
      size={70}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
