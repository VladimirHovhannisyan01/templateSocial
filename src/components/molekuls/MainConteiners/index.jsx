import classes from "./index.module.css";

const MainConteiners = ({ children }) => {
  return <div className={classes.conteiner}>{children}</div>;
};

export default MainConteiners;
