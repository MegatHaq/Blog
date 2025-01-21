import { LucideProps } from "lucide-react";

export const IconButton = ({
  Icon,
  children,
  clickHandler,
}: {
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  children: React.ReactNode;
  clickHandler: () => void;
}) => {
  return (
    <div
      className="px-4 py-2 bg-gray-600 text-gray-100 rounded-md text-sm hover:bg-gray-700 flex gap-2 items-center cursor-pointer"
      onClick={() => {
        clickHandler();
      }}
    >
      <Icon size={16} className="my-auto" />
      <button>{children}</button>
    </div>
  );
};
