import { useEffect, useState } from "react";
import { Card, Spinner } from "../../components";
import { useUpdatePostMutation, useGetPostsQuery } from "../../services";
import { PostsAPI } from "../../interfaces";
import { MdEdit } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

export const UpdatePage = () => {
  const { data: posts, isLoading } = useGetPostsQuery();
  const [updatePost] = useUpdatePostMutation();
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");
  const [allData, setAllData] = useState<PostsAPI[]>(posts || []);

  const { t } = useTranslation();

  useEffect(() => {
    if (posts) {
      setAllData(posts);
    }
  }, [posts]);

  const handleEdit = (post: PostsAPI) => {
    setEditingPostId(post.id); // Pone en modo edición el post
    setTitle(post.title);
  };

  const handleUpdate = () => {
    if (!editingPostId || !title) return;

    const formData = {
      id: editingPostId,
      title,
    };

    updatePost(formData)
      .unwrap()
      .then((updatedPost) => {
        Swal.fire(t("update_succesfully"));
        setEditingPostId(null); // Sale del modo edición
        setAllData(
          allData.map((post) =>
            post.id === updatedPost.id ? updatedPost : post
          )
        );
        setTitle("");
      })
      .catch(() => Swal.fire(t("update_error")));
  };

  if (isLoading) return <Spinner />;

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen p-4">
      <div className="mt-6">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allData?.map((post) => (
            <Card key={post.id}>
              <div className="flex justify-between items-center">
                {editingPostId === post.id ? (
                  <input
                    className="w-3/4 px-4 py-2 border border-gray-200 dark:border-gray-400 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                ) : (
                  <span>{post.title}</span>
                )}

                {editingPostId === post.id ? (
                  <GiConfirmed size={20} onClick={handleUpdate} />
                ) : (
                  <MdEdit size={20} onClick={() => handleEdit(post)} />
                )}
              </div>
            </Card>
          ))}
        </ul>
      </div>
    </div>
  );
};
