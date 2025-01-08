import { Suspense } from "react";
import { PostContainer } from "../page-components/posts-page/post-container";

export default function () {
  // add suspense for less loading time
  const Loader = () => {
    return <div>Loading...</div>;
  };
  return (
    <div className="mt-[5vh] font-[family-name:var(--font-montserrat)] h-screen px-[5vw] md:w-4/5 overflow-auto homescrollbar">
      <div className="">
        <Suspense fallback={<Loader />}>
          <PostContainer />
        </Suspense>
      </div>
    </div>
  );
}
