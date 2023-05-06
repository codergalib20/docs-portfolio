import { NextPage } from "next";
import AdminLayout from "@/@core/layout/AdminLayout";

interface Props {}

const Posts: NextPage<Props> = () => {
  return <AdminLayout>posts</AdminLayout>;
};

export default Posts;
