import classes from "./index.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes.footerTop}>
        <h5 className={classes.h5}>Footer</h5>
      </div>
      <div className={classes.footerBottom}>
        <p className={classes.text}>
          Powered by{" "}
          <a
            href="https://www.w3schools.com/w3css/default.asp"
            className={classes.link}
            target="_blank"
          >
            w3.css
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
