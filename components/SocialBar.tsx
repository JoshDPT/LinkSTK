import {
	AiFillGithub,
	AiFillLinkedin,
	AiOutlineTwitter,
	AiFillYoutube,
	AiFillInstagram,
	AiFillFacebook,
} from 'react-icons/ai';
import data from 'data.json';

const socialIcons = [
	{ icon: AiFillFacebook, name: 'facebook' },
	{ icon: AiFillGithub, name: 'github' },
	{ icon: AiFillInstagram, name: 'instagram' },
	{ icon: AiFillLinkedin, name: 'linkedin' },
	{ icon: AiOutlineTwitter, name: 'twitter' },
	{ icon: AiFillYoutube, name: 'youtube' },
];

const socials = new Set(socialIcons.map((icon) => icon.name));
const links = data.links.filter((link) => socials.has(link.title));
const map = new Map(links.map((link) => [link.title, link.href]));
const filteredSocials = socialIcons.filter((icon) => map.has(icon.name));

export default function SocialBar() {
	return (
		<div className="flex mb-8 mx-auto space-x-2">
			{filteredSocials.map((icon) => (
				<a key={icon.name} href={map.get(icon.name)} target="_blank">
					<icon.icon
						key={icon.name}
						className="h-8 w-8 hover:scale-110 duration-200 ease-out"
					/>
				</a>
			))}
		</div>
	);
}
