import { NextPage } from "next";
import Editor from "@/@core/editor";
import AdminLayout from "@/@core/layout/AdminLayout";

interface Props {}

const Create: NextPage<Props> = () => {
  return (
    <AdminLayout title="New Post">
      <div className="max-w-4xl mx-auto">
        <Editor
          onSubmit={(post) => {
            console.log(post);
          }}
        />
      </div>
    </AdminLayout>
  );
};

export default Create;
