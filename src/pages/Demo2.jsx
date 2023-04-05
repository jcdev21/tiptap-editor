import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Tiptap2 from '../components/Tiptap2';
import DOMPurify from 'dompurify';

export default function Demo2() {
	const [desc, setDesc] = React.useState('');
	const { register, handleSubmit, control, getValues } = useForm();

	const onSubmit = (data) => {
		console.log(data);
		const htmlDesc = getValues('description');
		console.log(htmlDesc);
		setDesc(htmlDesc);
	};

	return (
		<>
			<Link to="/" className="text-blue-600 font-semibold px-10">
				To Demo 1
			</Link>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="px-10 pt-10">
					<button
						type="submit"
						className="py-2 px-4 bg-teal-400 mb-3 rounded-lg"
					>
						Submit
					</button>
					<input
						type="text"
						placeholder="Title"
						className="mx-5 p-1"
						{...register('title')}
					/>
				</div>
				<div className="p-10 pt-0">
					<Controller
						name="description"
						control={control}
						render={({ field }) => {
							return <Tiptap2 handleChange={field.onChange} />;
						}}
					/>
				</div>
			</form>

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
