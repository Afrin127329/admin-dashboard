import HashLoader from "react-spinners/HashLoader";

const Loader = () => {
  return (
    <>
      <HashLoader
        color="gray"
        cssOverride={{
          display: "block",
          margin: "3rem auto",
          borderColor: "gray",
        }}
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
};

export default Loader;
