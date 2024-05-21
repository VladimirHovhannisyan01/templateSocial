import { useState } from "react";
import HeaderButton from "../../atoms/HeaderButton";
import IconText from "../../atoms/IconText";
import classes from "./index.module.css";
import NotificButtons from "../../atoms/NotificButtons";

const NavBar = () => {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };
  return (
    <nav className={classes.nav}>
      <div className={`${classes.li} ${classes["home-link"]}`}>
        <HeaderButton>
          <IconText iconName="home">Logo</IconText>
        </HeaderButton>
      </div>
      <ul className={classes.ul} id="ul">
        <li className={classes.li}>
          <HeaderButton>
            <IconText iconName="globe" />
          </HeaderButton>
        </li>
        <li className={classes.li}>
          <HeaderButton>
            <IconText iconName="user" />
          </HeaderButton>
        </li>
        <li className={classes.li}>
          <HeaderButton>
            <IconText iconName="envelope" />
          </HeaderButton>
        </li>
        <li
          className={`${classes.li} ${classes.bell}`}
          onMouseEnter={openModalHandler}
          onMouseLeave={closeModalHandler}
        >
          <HeaderButton>
            <IconText iconName="bell" />
            <span className={classes.notefic}>3</span>
          </HeaderButton>
          {openModal && (
            <div className={classes.modal}>
              <NotificButtons>One new friend request</NotificButtons>
              <NotificButtons>John Doe posted on your wall</NotificButtons>
              <NotificButtons>Jane likes your post</NotificButtons>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
