import ButtonAdmin from "@/components/ButtonAdmin";
import Link from "next/link";
export default function AdminPage() {
  return (
    <div className="w-screen h-screen inset-0 flex items-center justify-center">
      <div className=" w-screen h-screen bg-gray-200 p-4 rounded-lg flex flex-col sm:flex-row items-center justify-evenly">
        <div className="flex flex-col w-64 h-64 border-2 border-solid border-black justify-between pb-3">
          <div className="text-lg text-center text-white bg-black">Article</div>
          <ButtonAdmin text="Ajouter" url="/admin/article/add" />
          <ButtonAdmin text="Modifier/Suprimer" url="/admin/article/update" />
        </div>

        <div className="flex flex-col w-64 h-64 border-2 border-solid border-black justify-between pb-3">
          <div className="text-lg text-center text-white bg-black">News</div>
          <ButtonAdmin text="Ajouter" url="/admin/news/add" />
          <ButtonAdmin text="Modifier/Suprimer" url="/admin/news/update" />
        </div>
      </div>
    </div>
  );
}
