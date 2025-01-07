import { PostContainer } from "../page-components/posts-page/post-container";

export default function () {
  return (
    <div className="font-[family-name:var(--font-montserrat)] h-screen px-[5vw] md:w-4/5 overflow-auto homescrollbar">
      <h1 className="md:text-4xl text-2xl md:text-justify text-center tracking-wide mt-[10vh] font-bold">
        Posts
      </h1>
      <div>
        <PostContainer />
      </div>
    </div>
  );
}
