import { useContext } from "react";
import PostContext from "../../context/PostContext";
import UserImage from "../../atoms/UserImage";
import classes from "./index.module.css";
import MainConteiners from "../MainConteiners";
import MainButtons from "../../atoms/MainButtons";
import IconText from "../../atoms/IconText";

const Posts = () => {
  const { postsValues, onDeleteHandler, onEditHandler } =
    useContext(PostContext);

  return postsValues.map((el) => {
    return (
      <MainConteiners key={el.id}>
        <div className={classes.post_conteiner}>
          <div className={classes.user_conteiner}>
            <UserImage imgSrc={el.userImg} imgName="user-image" size="60px" />
            <h4>{el.username}</h4>
            <span>{el.postTime}</span>
          </div>
          <hr />
          <p>{el.text}</p>
          <div className={classes.images_conteiner}>
            {el.imgUrl.map((url, i) => {
              return url ? <img src={url} key={i} /> : "";
            })}
          </div>
          <div className={classes.buttons_conteiner}>
            <MainButtons>
              <IconText iconName="thumbs-up">Like</IconText>
            </MainButtons>
            <MainButtons>
              <IconText iconName="comment">Comment</IconText>
            </MainButtons>
            <MainButtons
              onClick={() => {
                onEditHandler(el.id, el.text, el.imgUrl);
              }}
            >
              <IconText iconName="edit">Edit</IconText>
            </MainButtons>
            <MainButtons
              onClick={() => {
                onDeleteHandler(el.id);
              }}
            >
              <IconText iconName="trash-o">Delete</IconText>
            </MainButtons>
          </div>
        </div>
      </MainConteiners>
    );
  });
};

export default Posts;
