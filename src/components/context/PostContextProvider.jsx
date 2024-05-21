import React, { useState } from "react";
import PostContext from "./PostContext";
import lights from "./../../assets/postImage/lights.jpg";
import nature from "./../../assets/postImage/nature.jpg";
import avatar2 from "./../../assets/userImage/avatar2.png";
import avatar5 from "./../../assets/userImage/avatar5.png";
import avatar6 from "./../../assets/userImage/avatar6.png";
import avatar3 from "./../../assets/userImage/avatar3.png";

const PostContextProvider = ({ children }) => {
  const [formValue, setFormValue] = useState({
    textValue: "",
    photoUrl: [],
  });

  const [postsValues, setPostsValues] = useState([
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imgUrl: [lights, nature],
      userImg: avatar2,
      username: "John Doe",
      postTime: "1 min",
      id: 1,
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imgUrl: [],
      userImg: avatar5,
      username: "Jane Doe",
      postTime: "16 min",
      id: 2,
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imgUrl: [nature],
      userImg: avatar6,
      username: "Angie Jane",
      postTime: "32 min",
      id: 3,
    },
  ]);

  const [editing, setEditing] = useState(null);

  const addPostHandler = (e) => {
    e.preventDefault();
    if (!formValue.textValue && !formValue.photoUrl[0]) return;

    if (editing !== null) {
      setPostsValues((prev) =>
        prev.map((item) =>
          item.id === editing
            ? {
                ...item,
                text: formValue.textValue,
                imgUrl: formValue.photoUrl,
              }
            : item
        )
      );
      setEditing(null);
    } else {
      const date = { dateNow: Date.now() };
      setPostsValues((prev) => [
        {
          username: "My Profile",
          text: formValue.textValue,
          imgUrl: formValue.photoUrl,
          userImg: avatar3,
          postTime: `? min`,
          id: Date.now(),
        },
        ...prev,
      ]);
    }

    setFormValue({
      textValue: "",
      photoUrl: [],
    });
  };

  const textValueHandler = (e) => {
    setFormValue((prev) => ({ ...prev, textValue: e.target.value }));
  };

  const onEditHandler = (id, text, urls) => {
    setEditing(id);
    setFormValue({
      textValue: text,
      photoUrl: urls,
    });
  };

  const onDeleteHandler = (postId) => {
    setPostsValues((prev) => prev.filter((el) => el.id !== postId));
  };

  const imgHandler = (e) => {
    const { files } = e.target;
    const selecteds = [...[...files]];

    const selectImg = selecteds.map((i) => URL.createObjectURL(i));
    setFormValue((prev) => ({ ...prev, photoUrl: selectImg }));
  };

  return (
    <PostContext.Provider
      value={{
        postsValues,
        onEditHandler,
        imgHandler,
        addPostHandler,
        textValueHandler,
        onDeleteHandler,
        formValue,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
