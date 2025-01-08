import { PostContainer } from "../page-components/posts-page/post-container";

export default function () {
  return (
    <div className="mt-[5vh] font-[family-name:var(--font-montserrat)] h-screen px-[5vw] md:w-4/5 overflow-auto homescrollbar">
      <div className="">
        <PostContainer />
      </div>
    </div>
  );
}
