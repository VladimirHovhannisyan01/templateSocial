import MainConteiners from "../MainConteiners";
import classes from "./index.module.css";
import forest from "../../../assets/postImage/forest.jpg";
import avatar6 from "../../../assets/userImage/avatar6.png";
import IconText from "../../atoms/IconText";

const RightRow = () => {
  return (
    <div className={classes.right}>
      <MainConteiners>
        <div className={classes.events}>
          <p>Upcoming Events:</p>
          <img src={forest} alt="forest" style={{ width: "100%" }} />
          <strong>Holiday</strong>
          <p>Friday 15:00</p>
          <button>Info</button>
        </div>
      </MainConteiners>
      <br />
      <MainConteiners>
        <div className={classes.frendRequestConteiner}>
          <p>Friend Request</p>
          <div>
            <img src={avatar6} alt="avatar6" style={{ width: "50%" }} />
            <p>Jane Doe</p>
          </div>
          <div className={classes.buttonsConteiner}>
            <button className={classes.checkButton}>
              <IconText iconName="check" />
            </button>
            <button className={classes.removeButton}>
              <IconText iconName="remove" />
            </button>
          </div>
        </div>
      </MainConteiners>
      <br />
      <MainConteiners>
        <div className={classes.ads}>ADS</div>
      </MainConteiners>
      <br />
      <MainConteiners>
        <div className={classes.bug}>
          <IconText iconName="bug" />
        </div>
      </MainConteiners>
    </div>
  );
};

export default RightRow;
