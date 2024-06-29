export default function News({ props }) {
  function formatDate(isoDateString) {
    const date = new Date(isoDateString);
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-based in JavaScript
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  }

  const date = formatDate(props.date);
  return (
    <div className="mb-7">
      <p>
        <span className="text-green-700 font-extrabold pr-3">{date}</span>
        {props.description}
      </p>
    </div>
  );
}
