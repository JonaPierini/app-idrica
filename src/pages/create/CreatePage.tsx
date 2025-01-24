import { useEffect, useState } from "react";
import { Button, Card, Spinner } from "../../components";
import { useCreatePostMutation, useGetPostsQuery } from "../../services";
import { PostsAPI } from "../../interfaces";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";

export const CreatePage = () => {
  const { data: posts, isLoading } = useGetPostsQuery();
  const [createPost] = useCreatePostMutation();
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [allData, setAllData] = useState<PostsAPI[]>(posts || []);

  const { t } = useTranslation();

  useEffect(() => {
    if (posts) {
      setAllData(posts);
    }
  }, [posts]);

  const handleSubmit = () => {
    const formData = {
      title,
      body,
    };
    if (body === "" || title === "") return;
    createPost(formData)
      .unwrap()
      .then((post) => {
        Swal.fire("create_succesfully");

        setTitle("");
        setBody("");
        setAllData([...allData, post]);
      })
      .catch(() => Swal.fire("create_error"));

    setTitle("");
    setBody("");
  };

  if (isLoading) return <Spinner />;
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen p-4">
      <div className="mt-6">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allData?.map((post) => (
            <Card key={uuidv4()}>{post.title}</Card>
          ))}
        </ul>
      </div>
      <div className="pt-5 bg-gray-100 dark:bg-gray-900 rounded-md shadow-md space-y-4">
        <input
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring focus:ring-blue-500"
          placeholder={t("create_title")}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring focus:ring-blue-500"
          placeholder={t("create_body")}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <Button action={handleSubmit} title={t("create_message")} />
      </div>
    </div>
  );
};
