type HeaderProps = {
	name: string;
	profile: StaticImageData;
};

type LinkProps = {
	id: number;
	title: string;
	href: string;
	image?: string | any;
	clicks: number;
};

type SocialProps = {
	links: LinkProps[];
};

type ClickProps = {
	clicks: number
}
