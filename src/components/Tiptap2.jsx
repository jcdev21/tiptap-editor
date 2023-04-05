// import './assets/tiptap.css';

import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import { EditorContent, generateHTML, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React, { useMemo } from 'react';
import clsx from 'clsx';

import { ReactComponent as BoldIcon } from '../assets/bold-solid.svg';
import { ReactComponent as ItalicIcon } from '../assets/italic-solid.svg';
import { ReactComponent as StrikeThroughIcon } from '../assets/strikethrough-solid.svg';
import { ReactComponent as ParagraphIcon } from '../assets/paragraph-solid.svg';
import { ReactComponent as BulletListIcon } from '../assets/list-solid.svg';
import { ReactComponent as OrderedListIcon } from '../assets/list-ol-solid.svg';
import { ReactComponent as BlockQuoteIcon } from '../assets/quote-left-solid.svg';
import { ReactComponent as HorizontalRuleIcon } from '../assets/ruler-horizontal-solid.svg';
import { ReactComponent as BreakIcon } from '../assets/arrow-down-solid.svg';
import { ReactComponent as UndoIcon } from '../assets/rotate-left-solid.svg';
import { ReactComponent as RedoIcon } from '../assets/rotate-right-solid.svg';

const MenuBar = ({ editor }) => {
	if (!editor) {
		return null;
	}

	return (
		<div className="bg-slate-200 p-2 flex gap-2">
			<div className="bg-slate-300 flex justify-center items-center gap-1">
				<button
					type="button"
					onClick={() => editor.chain().focus().toggleBold().run()}
					disabled={!editor.can().chain().focus().toggleBold().run()}
					className={clsx('p-2', {
						['bg-slate-400']: editor.isActive('bold'),
					})}
				>
					<BoldIcon className="w-4 h-4" />
				</button>
				<button
					type="button"
					onClick={() => editor.chain().focus().toggleItalic().run()}
					disabled={
						!editor.can().chain().focus().toggleItalic().run()
					}
					className={clsx('p-2', {
						['bg-slate-400']: editor.isActive('italic'),
					})}
				>
					<ItalicIcon className="w-4 h-4" />
				</button>
				<button
					type="button"
					onClick={() => editor.chain().focus().toggleStrike().run()}
					disabled={
						!editor.can().chain().focus().toggleStrike().run()
					}
					className={clsx('p-2', {
						['bg-slate-400']: editor.isActive('strike'),
					})}
				>
					<StrikeThroughIcon className="w-4 h-4" />
				</button>
			</div>
			{/* <button
      type="button"
				onClick={() => editor.chain().focus().toggleCode().run()}
				disabled={!editor.can().chain().focus().toggleCode().run()}
				className={editor.isActive('code') ? 'is-active' : ''}
			>
				code
			</button> */}
			{/* <button
      type="button"
				onClick={() => editor.chain().focus().unsetAllMarks().run()}
			>
				clear marks
			</button>
			<button
      type="button" onClick={() => editor.chain().focus().clearNodes().run()}>
				clear nodes
			</button> */}
			<div className="bg-slate-300 flex justify-center items-center gap-1">
				<button
					type="button"
					onClick={() => editor.chain().focus().setParagraph().run()}
					className={clsx('p-2', {
						['bg-slate-400']: editor.isActive('paragraph'),
					})}
				>
					<ParagraphIcon className="w-4 h-4" />
				</button>
				<button
					type="button"
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 1 }).run()
					}
					className={clsx('p-2 leading-4', {
						['bg-slate-400']: editor.isActive('heading', {
							level: 1,
						}),
					})}
				>
					h1
				</button>
				<button
					type="button"
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 2 }).run()
					}
					className={clsx('p-2 leading-4', {
						['bg-slate-400']: editor.isActive('heading', {
							level: 2,
						}),
					})}
				>
					h2
				</button>
				<button
					type="button"
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 3 }).run()
					}
					className={clsx('p-2 leading-4', {
						['bg-slate-400']: editor.isActive('heading', {
							level: 3,
						}),
					})}
				>
					h3
				</button>
				<button
					type="button"
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 4 }).run()
					}
					className={clsx('p-2 leading-4', {
						['bg-slate-400']: editor.isActive('heading', {
							level: 4,
						}),
					})}
				>
					h4
				</button>
				<button
					type="button"
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 5 }).run()
					}
					className={clsx('p-2 leading-4', {
						['bg-slate-400']: editor.isActive('heading', {
							level: 5,
						}),
					})}
				>
					h5
				</button>
				<button
					type="button"
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 6 }).run()
					}
					className={clsx('p-2 leading-4', {
						['bg-slate-400']: editor.isActive('heading', {
							level: 6,
						}),
					})}
				>
					h6
				</button>
			</div>
			<div className="bg-slate-300 flex justify-center items-center gap-1">
				<button
					type="button"
					onClick={() =>
						editor.chain().focus().toggleBulletList().run()
					}
					className={clsx('p-2', {
						['bg-slate-400']: editor.isActive('bulletList'),
					})}
				>
					<BulletListIcon className="w-4 h-4" />
				</button>
				<button
					type="button"
					onClick={() =>
						editor.chain().focus().toggleOrderedList().run()
					}
					className={clsx('p-2', {
						['bg-slate-400']: editor.isActive('orderedList'),
					})}
				>
					<OrderedListIcon className="w-4 h-4" />
				</button>
				{/* <button
        type="button"
				onClick={() => editor.chain().focus().toggleCodeBlock().run()}
				className={editor.isActive('codeBlock') ? 'is-active' : ''}
			>
				code block
			</button> */}
				<button
					type="button"
					onClick={() =>
						editor.chain().focus().toggleBlockquote().run()
					}
					className={clsx('p-2', {
						['bg-slate-400']: editor.isActive('blockquote'),
					})}
				>
					<BlockQuoteIcon className="w-4 h-4" />
				</button>
				<button
					type="button"
					onClick={() =>
						editor.chain().focus().setHorizontalRule().run()
					}
					className="p-2"
				>
					<HorizontalRuleIcon className="w-4 h-4" />
				</button>
				<button
					type="button"
					onClick={() => editor.chain().focus().setHardBreak().run()}
					className="p-2"
				>
					<BreakIcon className="w-4 h-4" />
				</button>
			</div>
			<div className="bg-slate-300 flex justify-center items-center gap-1">
				<button
					type="button"
					onClick={() => editor.chain().focus().undo().run()}
					disabled={!editor.can().chain().focus().undo().run()}
					className="p-2"
				>
					<UndoIcon className="w-4 h-4" />
				</button>
				<button
					type="button"
					onClick={() => editor.chain().focus().redo().run()}
					disabled={!editor.can().chain().focus().redo().run()}
					className="p-2"
				>
					<RedoIcon className="w-4 h-4" />
				</button>
			</div>
			{/* <button
      type="button"
				onClick={() => editor.chain().focus().setColor('#958DF1').run()}
				className={
					editor.isActive('textStyle', { color: '#958DF1' })
						? 'is-active'
						: ''
				}
			>
				purple
			</button> */}
		</div>
	);
};

export default ({ handleChange }) => {
	const editor = useEditor({
		extensions: [
			Color.configure({ types: [TextStyle.name, ListItem.name] }),
			TextStyle.configure({ types: [ListItem.name] }),
			StarterKit.configure({
				bulletList: {
					keepMarks: true,
					keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
				},
				orderedList: {
					keepMarks: true,
					keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
				},
			}),
		],
		editorProps: {
			attributes: {
				class: 'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none max-w-[100%]',
			},
		},
		content: ``,
		onUpdate: ({ editor }) => {
			const html = editor.getHTML();
			handleChange(html);
		},
	});

	return (
		<div>
			<MenuBar editor={editor} />
			<div className="p-3 border-2">
				<EditorContent editor={editor} />
			</div>
		</div>
	);
};
