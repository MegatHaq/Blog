type postProps = {
  data: postData[];
};

type postChildrenProps = {
  type: string;
  text: string;
  level: number;
};

interface postData {
  title: string;
  content: contentData[];
  publishedAt: string;
}

interface contentData {
  children: childrenData[];
  type: string;
  level: number;
}

interface childrenData {
  text: string;
  type: string;
}

export const Post = (props: postProps) => {
  const { data } = props;

  const textSize = [null, 3, 2, 1];

  console.log(data);

  const PostChildren = (props: postChildrenProps) => {
    const { type, text, level } = props;

    let className = "";
    if (type === "heading") {
      className = `text-${textSize[level]}xl`;
    } else {
      className = `text-sm`;
    }

    return <div className={className}>{text}</div>;
  };

  return (
    <div>
      {data?.map(({ title, content, publishedAt }, index) => (
        <div key={index}>
          <h1>{title}</h1>
          <h2>{publishedAt}</h2>
          <div>
            {content.map(({ children, type, level }) => {
              return children.map(({ text }) => {
                return (
                  <div key={text} className="grid gap-12">
                    <PostChildren type={type} text={text} level={level} />
                  </div>
                );
              });
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
