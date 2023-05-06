import { FC } from "react";
import { Editor } from '@tiptap/react';
import DropdownOptions from "@/@core/common/dropdownOptions";

interface Props {
    editor: Editor | null
};

const Tollbar: FC<Props> = () => {
    return (
        <div>
            <DropdownOptions options={[
                { label: 'Paragraph', onClick: () => { } },
                { label: 'Paragraph 1', onClick: () => { } },
                { label: 'Paragraph 2', onClick: () => { } },
                { label: 'Paragraph 3', onClick: () => { } },
            ]}
                head={<p>Paragraph</p>}
            />
        </div>
    )
};

export default Tollbar