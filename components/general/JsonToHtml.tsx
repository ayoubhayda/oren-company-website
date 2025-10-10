"use client";
import React, { useEffect, useRef } from "react";
import TextAlign from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";
import { EditorContent, JSONContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const JsonToHtml = ({ json }: { json: JSONContent | null | undefined }) => {
  // Ensure we have valid content
  const validContent = json && typeof json === 'object' && json.type === 'doc' && Array.isArray(json.content)
    ? json
    : { type: 'doc', content: [] };

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Typography,
    ],
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-invert",
      },
    },
    editable: false,
    content: validContent,
  });

  // Update editor content when json prop changes
  useEffect(() => {
    if (editor && json) {
      editor.commands.setContent(validContent);
    }
  }, [editor, json, validContent]);

  if (!editor) {
    return <div>Safe fallback content</div>;
  }

  return <EditorContent editor={editor} />;
}

export default JsonToHtml;