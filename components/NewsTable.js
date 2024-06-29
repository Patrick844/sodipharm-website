import { FaTrash, FaEdit, FaSave } from "react-icons/fa";

const NewsTable = ({ news, handleDelete, handleUpdate, handleSave }) => {
  function formatDateForInput(dateString) {
    const date = new Date(dateString);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(date.getUTCDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {news.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b">
                <input
                  type="text"
                  value={item.description}
                  onChange={(e) =>
                    handleUpdate(item.id, "description", e.target.value)
                  }
                  className="w-full border rounded px-2"
                />
              </td>
              <td className="py-2 px-4 border-b">
                <input
                  type="date"
                  value={formatDateForInput(item.date)}
                  onChange={(e) =>
                    handleUpdate(item.id, "date", e.target.value)
                  }
                  className="w-full border rounded px-2"
                />
              </td>

              <td className="py-2 px-4 border-b flex space-x-2">
                <button
                  onClick={() => handleSave(item.id)}
                  className="text-green-500 hover:text-green-700 mt-3"
                >
                  <FaSave />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-500 hover:text-red-700 mt-3"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewsTable;
