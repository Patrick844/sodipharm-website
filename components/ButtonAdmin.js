function ButtonAdmin(props) {
  return (
    <a
      href={props.url}
      className={`mx-2 bg-blue-500 hover:bg-blue-700 text-white text-center sm:text-xl  font-bold py-4 px-4 rounded`}
    >
      {props.text}
    </a>
  );
}

export default ButtonAdmin;
