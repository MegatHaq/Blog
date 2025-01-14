import { ErrorIcon } from "./error-icon";

export const ErrorPage = () => {
  return (
    <div className="font-[family-name:var(--font-montserrat)] px-[5vw] py-[5vh] mx-auto my-auto">
      <div className="opacity-80">
        <ErrorIcon size="300px" />
      </div>
      <h1 className="font-bold text-center">Oops something went wrong.</h1>
      <p className="text-sm text-gray-500 text-center">
        Please try again later.
      </p>
    </div>
  );
};
