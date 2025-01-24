import { Card, Spinner } from "../../components";
import { useGetPostsQuery } from "../../services";

export const HomePage = () => {
  const { data: posts, isLoading } = useGetPostsQuery();

  if (isLoading) return <Spinner />;

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen p-4">
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
