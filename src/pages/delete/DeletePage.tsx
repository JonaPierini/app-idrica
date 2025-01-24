import { useEffect, useState } from "react";
import { Card, Spinner } from "../../components";
import { PostsAPI } from "../../interfaces";
import { useDeletePostMutation, useGetPostsQuery } from "../../services";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

export const DeletePage = () => {
  const { data: posts, isLoading } = useGetPostsQuery();
  const [deletePost] = useDeletePostMutation();
  const [allData, setAllData] = useState<PostsAPI[]>(posts || []);
  const { t } = useTranslation();

  useEffect(() => {
    if (posts) {
      setAllData(posts);
    }
  }, [posts]);

  const handleDelete = (postId: string) => {
    deletePost(postId)
      .unwrap()
      .then(() => {
        Swal.fire(t("delete_succesfully"));
        setAllData(allData.filter((post) => post.id !== postId));
      })
      .catch(() => Swal.fire(t("delete_error")));
  };

  if (isLoading) return <Spinner />;
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen p-4">
      <div className="mt-6">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allData?.map((post) => (
            <Card key={post.id}>
              <div className="flex justify-between">
                <span>{post.title}</span>
                <MdDeleteForever
                  cursor={"pointer"}
                  size={25}
                  onClick={() => handleDelete(post.id)}
                />
              </div>
            </Card>
          ))}
        </ul>
      </div>
    </div>
  );
};
