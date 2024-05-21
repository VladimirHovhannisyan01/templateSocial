import { useState } from "react";
import IconText from "../../atoms/IconText";
import classes from "./index.module.css";

const Notific = () => {
  const [togle, setTogle] = useState(true);
  if (!togle) {
    return;
  }

  return (
    <div className={classes.notificConteiner} id="notific">
      <strong>Hey!</strong>
      <p>People are looking at your profile. Find out who.</p>
      <button onClick={() => setTogle(false)}>
        <IconText iconName="remove" />
      </button>
    </div>
  );
};

export default Notific;
