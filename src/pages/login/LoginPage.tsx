import { useDispatch } from "react-redux";
import { login } from "../../store";
import { useTranslation } from "react-i18next";
import { Card } from "../../components";
import { useFetchPostsQuery } from "../../services";

export const LoginPage = () => {
  const { data: posts, isLoading } = useFetchPostsQuery();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  if (isLoading) return <p>Cargando posts...</p>;

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen p-4">
      <div>
        <h1
          className="text-2xl font-bold text-blue-600 dark:text-blue-400 cursor-pointer hover:underline"
          onClick={() => dispatch(login())}
        >
          {t("logIn_message")}
        </h1>
      </div>
      <div className="mt-6">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts?.map((post) => (
            <Card key={post.id}>{post.title}</Card>
          ))}
        </ul>
      </div>
    </div>
  );
};
