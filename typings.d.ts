interface HeaderProps {
	name: string;
	profile: StaticImageData;
}

interface LinkProps {
	id: number;
	title: string;
	href: string;
	image?: string | any;
	clicks: number;
}

interface SocialProps {
	links: LinkProps[];
}

interface ClickProps {
	clicks: number;
}

interface ViewProps {
	id: number;
	clicks: number;
}

interface LinkViews {
	
}
