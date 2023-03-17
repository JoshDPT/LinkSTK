type HeaderProps = {
	data: {
		name: string;
	};
	profile: StaticImageData;
};

type LinkProps = {
	title: string;
	href: string;
	image?: string | any;
	clicks: number;
};

type SocialProps = {
	links: LinkProps[];
};
