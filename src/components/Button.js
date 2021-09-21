const Button = function ({ name, disabled }) {
  return <button disabled={disabled}>{name}</button>;
};

export default Button;
