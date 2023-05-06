import { FC } from "react";
import {Editor} from '@tiptap/react';

interface Props {
    editor: Editor | null
};

const Tollbar: FC<Props> = () => {
    return (
        <div>
            Tollbar
        </div>
    )
};

export default Tollbar