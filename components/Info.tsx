import { InfoBlock } from "@/components/InfoBlock";
import { motion } from "framer-motion";

export const Info = () => {
  return (
    <>
      <motion.div className="flex justify-between center ">
        <InfoBlock
          prefix="ЗАГРУЖЕНО:"
          title="1200 фото"
          postfix="Test system"
        />
        <InfoBlock prefix="МЕСТА" title="251 место" />
      </motion.div>
    </>
  );
};
