'use client';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
	example: string;
	exampleRequired: string;
};

export default function SubscriberForm() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => alert({ data });

	console.log(watch('example')); // watch input value by passing the name of it

	return (
		/* "handleSubmit" will validate your inputs before invoking "onSubmit" */
		<form
			className="flex items-center content-center space-x-2 p-4 rounded-full w-full max-w-2xl bg-slate-200 dark:bg-slate-800 transition-all border border-slate-500 mb-4 h-16 shadow-m hover:shadow-2xl hover:bg-white dark:hover:bg-slate-700 duration-200 ease-out relative"
			onSubmit={handleSubmit(onSubmit)}
		>
			{/* register your input into the hook by invoking the "register" function */}
			<input className="flex" defaultValue="test" {...register('example')} />

			{/* include validation with required or other standard HTML validation rules */}
			<input
				className="flex"
				{...register('exampleRequired', { required: true })}
			/>
			{/* errors will return when field validation fails  */}
			{errors.exampleRequired ? (
				<span className="flex flex-col">This field is required</span>
			) : null}

			<button type="submit">Submit</button>
		</form>
	);
}
