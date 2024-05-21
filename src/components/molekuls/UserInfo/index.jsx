import { useState } from "react";
import IconText from "../../atoms/IconText";
import classes from "./index.module.css";
import postImage1 from "../../../assets/postImage/lights.jpg";
import postImage2 from "../../../assets/postImage/nature.jpg";
import postImage3 from "../../../assets/postImage/mountains.jpg";
import postImage4 from "../../../assets/postImage/forest.jpg";
import postImage5 from "../../../assets/postImage/snow.jpg";

const UserInfo = () => {
  const [togle, setTogle] = useState({
    button1: false,
    button2: false,
    button3: false,
  });

  const openHandler = (e) => {
    if (e.target.className.includes("button1")) {
      setTogle((prev) => ({ ...prev, button1: !togle.button1 }));
    } else if (e.target.className.includes("button2")) {
      setTogle((prev) => ({ ...prev, button2: !togle.button2 }));
    } else {
      setTogle((prev) => ({ ...prev, button3: !togle.button3 }));
    }
  };

  return (
    <div className={classes.buttonsConteiner}>
      <button
        className={`button1 ${!!togle.button1 ? classes.checked : ""}`}
        onClick={openHandler}
      >
        <IconText iconName="circle-o-notch"> My Groups</IconText>
      </button>

      {togle.button1 && (
        <div className={classes.infoConteiner}>Some text..</div>
      )}

      <button
        className={`button2 ${!!togle.button2 ? classes.checked : ""}`}
        onClick={openHandler}
      >
        <IconText iconName="calendar-check-o"> My Events</IconText>
      </button>

      {togle.button2 && (
        <div className={classes.infoConteiner}>Some other text..</div>
      )}

      <button
        onClick={openHandler}
        className={!!togle.button3 ? classes.checked : ""}
      >
        <IconText iconName="users"> My Photos</IconText>
      </button>

      {togle.button3 && (
        <div className={`${classes.images} ${classes.infoConteiner} myImages`}>
          <img src={postImage1} alt="bnutyun" />
          <img src={postImage2} alt="bnutyun" />
          <img src={postImage3} alt="bnutyun" />
          <img src={postImage4} alt="bnutyun" />
          <img src={postImage2} alt="bnutyun" />
          <img src={postImage5} alt="bnutyun" />
        </div>
      )}
    </div>
  );
};

export default UserInfo;
