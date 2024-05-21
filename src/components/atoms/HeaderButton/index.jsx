import classes from "./index.module.css";

const HeaderButton = ({ children }) => {
  return <a className={classes.button}>{children}</a>;
};

export default HeaderButton;
