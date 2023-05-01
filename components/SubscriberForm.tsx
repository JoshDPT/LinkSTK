'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Loader2 } from 'lucide-react';

interface FormValues {
	email: string;
}

const schema = yup
	.object({
		email: yup.string().email().required(),
	})
	.required();

export default function SubscriberForm() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isSubmitting },
	} = useForm<FormValues>({
		resolver: yupResolver(schema),
	});

	const onSubmit: SubmitHandler<FormValues> = (data) => alert({ data });

	return (
		<form
			className="flex w-full max-w-2xl items-center space-x-2"
			onSubmit={handleSubmit(onSubmit)}
		>
			<Input
				type="email"
				placeholder="email"
				{...register('email', { required: true, pattern: /^\S+@\S+$/i })}
			/>
			{isSubmitting ? (
				<Button disabled>
					<Loader2 className="mr-2 h-4 w-4 animate-spin" />
					Please wait
				</Button>
			) : (
				<Button type="submit" disabled={isSubmitting}>
					Subscribe
				</Button>
			)}

			<div>{errors.email?.message}</div>
		</form>
	);
}
