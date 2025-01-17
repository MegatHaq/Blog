import { Suspense } from "react";
import { PostContainer } from "../page-components/posts-page/post-container";
import { Loader } from "../components/loader";

export default function () {
  // add suspense for less loading time

  return (
    <Suspense fallback={<Loader />}>
      <PostContainer />
    </Suspense>
  );
}
