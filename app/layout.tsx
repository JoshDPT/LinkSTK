import Providers from '@/components/Providers';
import './globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-slate-300 dark:bg-slate-900 transition-all duration-700">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
