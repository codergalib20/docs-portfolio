import { FC } from "react";
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from "@tiptap/starter-kit";
import Tollbar from "./Tollbar.index";

interface Props { };

const Editor: FC<Props> = () => {
    const editor = useEditor({
        extensions: [StarterKit]
    });
    return <>
        <Tollbar editor={editor} />
        <EditorContent editor={editor} />
    </>
};

export default Editor