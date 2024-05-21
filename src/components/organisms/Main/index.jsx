import CenterRow from "../../molekuls/CenterRow";
import LeftRow from "../../molekuls/LeftRow";
import RightRow from "../../molekuls/RightRow";
import classes from "./index.module.css";

const Main = () => {
  return (
    <>
      <main className={`${classes.main} main`}>
        <LeftRow />
        <CenterRow />
        <RightRow />
      </main>
      <br />
    </>
  );
};

export default Main;
