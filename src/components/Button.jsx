const Button = (props) => {
  return (
    <button
      onClick={() => {
        alert(`A label deste botão é ${props.label}`);
      }}
    >
      Clique Aqui!
    </button>
  );
};

export default Button;
