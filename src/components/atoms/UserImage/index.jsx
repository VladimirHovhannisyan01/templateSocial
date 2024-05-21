const UserImage = ({ imgSrc, imgName, borderRadius = "50%", size }) => {
  return (
    <img
      src={imgSrc}
      alt={imgName}
      style={{
        borderRadius,
        width: size,
        height: size,
      }}
    />
  );
};

export default UserImage;
