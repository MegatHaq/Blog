import Image from "next/image";
import { CardsBadge } from "./badges";

type CardsProps = {
  title: string;
  image: string;
  header: string;
  description: string;
};

export function Cards(props: CardsProps) {
  const { title, image, header, description } = props;
  return (
    <div className="w-[350px]">
      <h1 className="text-2xl">{title}</h1>
      <Image
        src={image}
        width={400}
        height={400}
        alt=""
        className="mt-[5vh] rounded-md hover:-translate-y-6 ease-in-out duration-300"
      />
      <CardsBadge header={header} />
      <p className="text-sm mt-[2vh]">{description}</p>
    </div>
  );
}
