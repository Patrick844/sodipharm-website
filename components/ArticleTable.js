import { FaTrash, FaEdit, FaSave } from "react-icons/fa";

const ArticleTable = ({ articles, handleDelete, handleUpdate, handleSave }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">URL</th>
            <th className="py-2 px-4 border-b">Keywords</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id}>
              <td className="py-2 px-4 border-b">
                <input
                  type="text"
                  value={article.title}
                  onChange={(e) =>
                    handleUpdate(article.id, "title", e.target.value)
                  }
                  className="w-full border rounded px-2"
                />
              </td>
              <td className="py-2 px-4 border-b">
                <input
                  type="text"
                  value={article.url}
                  onChange={(e) =>
                    handleUpdate(article.id, "url", e.target.value)
                  }
                  className="w-full border rounded px-2"
                />
              </td>
              <td className="py-2 px-4 border-b">
                <input
                  type="text"
                  value={article.keywords}
                  onChange={(e) =>
                    handleUpdate(article.id, "keywords", e.target.value)
                  }
                  className="w-full border rounded px-2"
                />
              </td>
              <td className="py-2 px-4 border-b flex space-x-2">
                <button
                  onClick={() => handleSave(article.id)}
                  className="text-green-500 hover:text-green-700"
                >
                  <FaSave />
                </button>
                <button
                  onClick={() => handleDelete(article.id)}
                  className="text-red-500 hover:text-red-700"
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

export default ArticleTable;
