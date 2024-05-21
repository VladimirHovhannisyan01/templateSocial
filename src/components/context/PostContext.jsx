import { createContext } from "react";

const PostContext = createContext({
  postsValues: [],
  onEditHandler: () => {},
  onDeleteHandler: () => {},
  imgHandler: () => {},
  addPostHandler: () => {},
  textValueHandler: () => {},
  a: () => {},
  formValue: {
    textValue: "",
    photoUrl: [],
  },
});

export default PostContext;
