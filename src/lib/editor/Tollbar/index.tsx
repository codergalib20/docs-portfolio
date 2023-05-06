import { FC } from "react";
import { Editor } from '@tiptap/react';
import DropdownOptions from "@/@core/common/dropdownOptions";
import { AiFillCaretDown } from "react-icons/ai";
import { getFocusEditor } from "../editorUtils";

interface Props {
    editor: Editor | null
};

const Tollbar: FC<Props> = ({ editor }) => {
    const options = [
        {
            label: 'Paragraph',
            onClick: () => getFocusEditor(editor as any).setParagraph().run()
        },
        {
            label: 'Heading 1',
            onClick: () => getFocusEditor(editor as any).toggleHeading({ lavel: 1 } as any).run()
        },
        {
            label: 'Heading 2',
            onClick: () => getFocusEditor(editor as any).toggleHeading({ lavel: 2 } as any).run()
        },
        {
            label: 'Heading 3',
            onClick: () => getFocusEditor(editor as any).toggleHeading({ lavel: 3 } as any).run()
        },
    ]

    const Head = () => {
        return (
            <div className="flex items-center text-black gap-3">
                <p>Paragraph</p>
                <AiFillCaretDown className="mt-2" />
            </div>
        )
    }

    return (
        <div>
            <DropdownOptions options={options}
                head={<Head />}
            />
        </div>
    )
};

export default Tollbar