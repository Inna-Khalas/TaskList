const Button = ({ type = "button", children, ...otherProps }) => {
  return (
    <button
      type={type}
      {...otherProps}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
    >
      {children}
    </button>
  );
};

export default Button;
