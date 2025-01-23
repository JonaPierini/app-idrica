import { useDispatch } from "react-redux";
import { login } from "../../store";
import { useTranslation } from "react-i18next";
import { Button, Card, Spinner } from "../../components";
import { useFetchPostsQuery } from "../../services";

export const LoginPage = () => {
  const { data: posts, isLoading } = useFetchPostsQuery();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  if (isLoading) return <Spinner />;

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen p-4">
      <div>
        <Button title={t("logIn_message")} action={() => dispatch(login())} />
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
