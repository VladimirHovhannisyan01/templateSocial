import NavBar from "../../molekuls/NavBar";
import HeaderButton from "../../atoms/HeaderButton";
import avatarGreen from "../../../assets/userImage/avatar2.png";
import classes from "./index.module.css";
import UserImage from "../../atoms/UserImage";
import IconText from "../../atoms/IconText";

const Header = () => {
  return (
    <header className={classes.header}>
      <div>
        <NavBar />
      </div>
      <div className={classes.userButton}>
        <HeaderButton>
          <div className="avatar">
            <UserImage imgSrc={avatarGreen} imgName="User-Image" size="22px" />
          </div>
          <div className={classes.bars} id="icon">
            <IconText iconName="bars" />
          </div>
        </HeaderButton>
      </div>
    </header>
  );
};

export default Header;
