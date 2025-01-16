import { Suspense } from "react";
import { PostContainer } from "../page-components/posts-page/post-container";

export default function () {
  // add suspense for less loading time
  const Loader = () => {
    return <div>Loading...</div>;
  };
  return (
    <Suspense fallback={<Loader />}>
      <PostContainer />
    </Suspense>
  );
}
