import { InfoBlock } from "@/components/InfoBlock";
import { motion } from "framer-motion";

export const Info = () => {
  return (
    <>
      <motion.div className="flex justify-between center ">
        <InfoBlock
          prefix="ЗАГРУЖЕНО:"
          title="0 фото"
          postfix="Test system"
        />
        <InfoBlock prefix="МЕСТА" title="330 мест" />
      </motion.div>
    </>
  );
};
