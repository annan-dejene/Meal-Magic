import { ClipLoader } from "react-spinners";

const Spinner = () => {
  const override = {
    display: "block",
    margin: "100px auto",
  };

  return <ClipLoader color="#5B5307" cssOverride={override} size={150} />;
};

export default Spinner;
