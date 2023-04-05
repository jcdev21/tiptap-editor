import DOMPurify from 'dompurify';
import React from 'react';
import Tiptap from '../components/Tiptap';
import { Link } from 'react-router-dom';

export default function Demo1() {
	const [desc, setDesc] = React.useState('');

	const sanitizeData = () => ({
		__html: DOMPurify.sanitize(desc),
	});

	return (
		<>
			<Link to="/demo2" className="text-blue-600 font-semibold px-10">
				To Demo RHF
			</Link>
			<div className="p-10">
				<Tiptap setDesc={setDesc} />
			</div>

			<div className="p-10">{desc}</div>
			<div className="p-10">
				<div
					className="prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none max-w-[100%]"
					dangerouslySetInnerHTML={{
						__html: DOMPurify.sanitize(desc),
					}}
				/>
			</div>
		</>
	);
}
