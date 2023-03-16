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
	{ Icon: AiFillFacebook, Name: 'facebook' },
	{ Icon: AiFillGithub, Name: 'github' },
	{ Icon: AiFillInstagram, Name: 'instagram' },
	{ Icon: AiFillLinkedin, Name: 'linkedin' },
	{ Icon: AiOutlineTwitter, Name: 'twitter' },
	{ Icon: AiFillYoutube, Name: 'youtube' },
];

export default function SocialBar() {
	const socials = new Set([
		'facebook',
		'github',
		'instagram',
		'linkedin',
		'twitter',
		'youtube',
	]);

	const links = data.links.filter((e) => socials.has(e.title));
	const map = new Map();
	links.forEach(link => map.set(link.title, link.href))

	return (
		<div className="flex mb-8 mx-auto space-x-2">
			{socialIcons.map((item, index) => {
				const { Icon, Name } = item;
				return (
					<a key={Name} href={map.get(Name)}target="_blank">
						<Icon
							key={index}
							className="h-8 w-8 hover:scale-110 duration-200 ease-out"
						/>
					</a>
				);
			})}
		</div>
	);
}
