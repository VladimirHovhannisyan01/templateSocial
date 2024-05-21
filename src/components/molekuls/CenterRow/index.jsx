import CreatePosts from "../CreatePosts";
import MainConteiners from "../MainConteiners";
import Posts from "../Posts";
import classes from "./index.module.css";

const CenterRow = () => {
  return (
    <div className={classes.center} id="center-conteiner">
      <MainConteiners>
        <CreatePosts />
      </MainConteiners>
      <Posts />
    </div>
  );
};

export default CenterRow;
