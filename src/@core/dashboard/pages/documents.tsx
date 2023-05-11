import { FC } from "react";
import {motion} from 'framer-motion';

interface Props { };

const DocumentDashboard: FC<Props> = () => {
    return (
        <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
            DocumentDashboard
        </motion.div>
    )
};

export default DocumentDashboard