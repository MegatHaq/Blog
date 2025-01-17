import { LoaderCircle } from "lucide-react";

export const Loader = () => {
  return (
    <div className="w-full flex justify-center my-auto h-1/5">
      <LoaderCircle className="animate-spin" />
    </div>
  );
};
