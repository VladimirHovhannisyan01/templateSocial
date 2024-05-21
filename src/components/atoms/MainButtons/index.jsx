import classes from "./index.module.css";

const MainButtons = ({ children, onClick }) => {
  return (
    <button className={classes.mainButton} onClick={onClick}>
      {children}
    </button>
  );
};

export default MainButtons;
