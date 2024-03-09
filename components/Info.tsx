import { InfoBlock } from "@/components/InfoBlock";

export const Info = () => {
  return (
    <>
      <div className="flex justify-between center ">
        <InfoBlock
          prefix="ЗАГРУЖЕНО:"
          title="1200 фото"
          postfix="Test system"
        />
        <InfoBlock prefix="МЕСТА" title="251 место" />
      </div>
    </>
  );
};
