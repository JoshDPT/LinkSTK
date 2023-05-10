'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Loader2 } from 'lucide-react';
import addSub from '@/lib/addSub';

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
		reset,
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<FormValues>({
		resolver: yupResolver(schema),
	});

	const onSubmit: SubmitHandler<FormValues> = (data) => {addSub(data.email), reset()};

	function delayedExecution<T extends any[], R>(
		func: (...args: T) => R
	): (...args: T) => Promise<R> {
		return async (...args: T): Promise<R> => {
			await new Promise((resolve) => setTimeout(resolve, 3000));
			return func(...args);
		};
	}

	return (
		<form
			className="flex flex-col sm:flex-row w-full max-w-2xl items-end space-y-2 sm:space-y-0 sm:space-x-2 mb-16"
			onSubmit={handleSubmit(delayedExecution(onSubmit))}
		>
			<div className="flex flex-col w-full gap-2">
				<div className="flex flex-row content-between justify-between">
					<label className='font-bold'>Subscribe</label>
					<div className='text-red-400 animate-pulse'>{errors.email?.message}</div>
				</div>

				<Input
					type="email"
					placeholder="email"
					{...register('email', { required: true, pattern: /^\S+@\S+$/i })}
				/>
			</div>
			<div className="flex flex-shrink-0 w-full sm:w-auto">
				{isSubmitting ? (
					<Button disabled className="sm:w-40 w-full">
						<Loader2 className="mr-2 h-6 w-6 animate-spin" />
						Loading...
					</Button>
				) : (
					<Button
						className="sm:w-40 w-full"
						type="submit"
						disabled={isSubmitting}
					>
						Subscribe
					</Button>
				)}
			</div>
		</form>
	);
}
