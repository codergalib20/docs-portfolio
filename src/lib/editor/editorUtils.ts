import { Editor } from "@tiptap/react";

export const getFocusEditor = (editor: Editor) => {
  return editor.chain().focus();
};
