'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface FormValues {
	email: string;
}

export default function SubscriberForm() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FormValues>();
	const onSubmit: SubmitHandler<FormValues> = (data) => alert({ data });

	console.log(watch('email')); // watch input value by passing the name of it

	return (
		/* "handleSubmit" will validate your inputs before invoking "onSubmit" */

		<form
			className="flex w-full max-w-2xl items-center space-x-2"
			onSubmit={handleSubmit(onSubmit)}
		>
			<Input
				type="email"
				placeholder="email"
				{...register('email', { required: true, pattern: /^\S+@\S+$/i })}
			/>
			<Button type="submit">Subscribe</Button>

			{errors.email ? (
				<span>This field is required and must be a valid email</span>
			) : null}
		</form>
	);
}
