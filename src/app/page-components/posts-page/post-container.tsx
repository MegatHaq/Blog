import { PostsTitleList } from "@/lib/types";
import { Post } from "./posts";
import { query } from "@/lib/ApolloClient";
import { GET_POST_TITLES } from "@/graphql/post";
import { ErrorPage } from "@/app/components/error-page";

export const PostContainer = async () => {
  // This is where the fetching occurs.
  // TODO : ADD TABLE OF CONTENTS AS A SIDE BAR COMPONENT
  try {
    const { data } = await query<PostsTitleList>({
      query: GET_POST_TITLES,
    });

    return (
      <div className="pt-[5vh] font-[family-name:var(--font-montserrat)] h-screen px-[5vw] md:w-4/5 overflow-auto homescrollbar flex">
        <div className="grid grid-cols-3 gap-12">
          <Post data={data?.posts} />
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
    return <ErrorPage />;
  }
};
