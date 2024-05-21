import classes from "./index.module.css";

const NotificButtons = ({ children }) => {
  return <button className={classes.button}>{children}</button>;
};

export default NotificButtons;
