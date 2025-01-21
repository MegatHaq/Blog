export const Gallery = ({
  imageUri,
  imageCaption,
}: {
  imageUri: string;
  imageCaption: string;
}) => {
  return (
    <div className="w-4/5 mt-4">
      <img src={imageUri} className="rounded-xl cursor-pointer" />
      <p className="text-center text-sm mt-4 text-gray-500 font-[family-name:var(--font-nunito)]">
        {imageCaption}
      </p>
    </div>
  );
};
