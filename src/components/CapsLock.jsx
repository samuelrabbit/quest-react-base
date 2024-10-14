const CapsLock = (props) => {
  const text = props.children;
  const textUppercase = text.toUpperCase();

  return <div style={{ color: "red" }}>{textUppercase}</div>;
};

export default CapsLock;
