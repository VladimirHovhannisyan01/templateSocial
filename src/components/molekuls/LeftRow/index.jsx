import UserImage from "../../atoms/UserImage";
import MainConteiners from "../MainConteiners";
import classes from "./index.module.css";
import avatarBlue from "../../../assets/userImage/avatar3.png";
import IconText from "../../atoms/IconText";
import UserInfo from "../UserInfo";
import Interests from "../../atoms/Interests";
import Notific from "../Notific";

const LeftRow = () => {
  const interest = [
    {
      name: "News",
      bgColor: "#303e45",
      color: "white",
    },
    {
      name: "W3Schools",
      bgColor: "#3a4b53",
      color: "white",
    },
    {
      name: "Labels",
      bgColor: "#435761",
      color: "white",
    },
    {
      name: "Games",
      bgColor: "#4d636f",
      color: "white",
    },
    {
      name: "Friends",
      bgColor: "#57707d",
      color: "white",
    },
    {
      name: "Games",
      bgColor: "#607d8b",
      color: "white",
    },
    {
      name: "Friends",
      bgColor: "#7d97a5",
      color: "white",
    },
    {
      name: "Food",
      bgColor: "#9eb1bb",
      color: "black",
    },
    {
      name: "Design",
      bgColor: "#becbd2",
      color: "black",
    },
    {
      name: "Art",
      bgColor: "#dfe5e8",
      color: "black",
    },
    {
      name: "Photos",
      bgColor: "#f5f7f8",
      color: "black",
    },
  ];
  return (
    <div className={classes.left}>
      <MainConteiners>
        <div className={classes.myProfileConteiner}>
          <h4>My Profile</h4>
          <UserImage imgSrc={avatarBlue} imgName="user-image" size="106px" />
        </div>
        <hr className={classes.hr} />
        <div className={classes.infoConteiner}>
          <p>
            <IconText iconName="pencil" style={{ color: "#607d8b" }}>
              {" "}
              Designer, UI
            </IconText>
          </p>
          <p>
            <IconText iconName="home" style={{ color: "#607d8b" }}>
              {" "}
              London, UK
            </IconText>
          </p>
          <p>
            <IconText iconName="birthday-cake" style={{ color: "#607d8b" }}>
              {" "}
              April 1, 1988
            </IconText>
          </p>
        </div>
      </MainConteiners>
      <br />
      <UserInfo />
      <br />
      <div className="display_none">
        <MainConteiners>
          <p className={classes.interestText}>Interests</p>
          <div className={classes.interestsConteiner}>
            {interest.map((el, i) => {
              return (
                <Interests
                  key={i}
                  style={{ backgroundColor: el.bgColor, color: el.color }}
                >
                  {el.name}
                </Interests>
              );
            })}
          </div>
        </MainConteiners>
      </div>
      <br />
      <Notific />
    </div>
  );
};

export default LeftRow;
