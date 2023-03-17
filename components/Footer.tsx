export default function Footer ({ data }: HeaderProps) {

    return (
        <footer>
            <h3 className="text-md text-black text-center font-bold dark:text-white select-none transition-all duration-300 ease-out mb-16">
                Created by{' '}
                <span className="text-sky-500 dark:text-sky-400">{data.name}</span>
            </h3>
        </footer>
    )
}