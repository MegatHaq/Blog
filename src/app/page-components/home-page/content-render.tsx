type RenderContentProps = {
  type: string;
  text: string;
  level: number;
};

export const RenderContent = ({ text, type, level }: RenderContentProps) => {
  const textSize = [null, 3, 2, 1];

  let className = "";
  if (type === "heading") {
    className = `text-${textSize[level]}xl font-bold`;
  } else {
    className = `text-1xl`;
  }

  return <p className={className}>{text}</p>;
};
