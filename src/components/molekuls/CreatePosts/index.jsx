import { useContext } from "react";
import IconText from "../../atoms/IconText";
import MainButtons from "../../atoms/MainButtons";
import classes from "./index.module.css";
import PostContext from "../../context/PostContext";

const CreatePosts = () => {
  const { addPostHandler, textValueHandler, imgHandler, formValue } =
    useContext(PostContext);

  return (
    <form className={classes.postsForm} onSubmit={addPostHandler}>
      <h6 className={classes.text}>Social Media template by w3.css</h6>
      <input
        type="text"
        className={classes.inputText}
        onChange={textValueHandler}
        value={formValue.textValue}
      />
      <div>
        <label className={classes.label_file}>
          <IconText iconName="download">Download Photo</IconText>
          <input type="file" onChange={imgHandler} multiple key={Date.now()} />
        </label>
      </div>
      <div className={classes.post_image}>
        {formValue.photoUrl?.map((i) => (
          <img key={i} src={i} />
        ))}
      </div>
      <div>
        <MainButtons>
          <IconText iconName="pencil">Post</IconText>
        </MainButtons>
      </div>
    </form>
  );
};

export default CreatePosts;
