import { Suspense } from "react";
import { PostContainer } from "@/app/page-components/posts-page/post-container";
import { Loader } from "@/app/components/loader";

export default function () {
  // add suspense for less loading time

  return (
    <Suspense fallback={<Loader />}>
      <PostContainer />
    </Suspense>
  );
}
