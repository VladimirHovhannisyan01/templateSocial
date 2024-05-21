import classes from "./index.module.css";

const IconText = ({ iconName, children, style }) => {
  let className = "";
  if (children) {
    className = classes.margin;
  }
  return (
    <>
      <i
        className={`fa fa-${iconName} ${classes.icon} ${className}`}
        aria-hidden="true"
        style={style}
      ></i>
      {children}
    </>
  );
};

export default IconText;
