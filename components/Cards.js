export default function Cards({ props }) {
  if (props) {
  }
  return (
    <div className="border-2 border-solid rounded-lg border-black min-w-64 min-h-58 text-center mb-2">
      <p className="font-semibold text-lg"> {props.title}</p>
      <p className="mt-7 px-3 text-left">
        URL:{" "}
        <a href="www.google.com" className="text-blue-500 hover:underline">
          {props.url}
        </a>
      </p>
      <p className="mt-7 px-3 text-left">
        <span className="italic font-semibold">Keywords: </span>
        {props.keywords}
      </p>
    </div>
  );
}
