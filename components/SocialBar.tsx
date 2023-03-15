import {
	AiFillGithub,
	AiFillLinkedin,
	AiOutlineTwitter,
	AiFillYoutube,
	AiFillInstagram,
	AiFillFacebook,
} from 'react-icons/ai';

const socialIcons = [
	{ Icon: AiFillFacebook },
	{ Icon: AiFillGithub },
	{ Icon: AiFillInstagram },
	{ Icon: AiFillLinkedin },
	{ Icon: AiOutlineTwitter },
	{ Icon: AiFillYoutube },
];

export default function SocialBar() {
	return (
		<div className="flex mb-8 mx-auto space-x-2">
			{socialIcons.map((item, index) => {
				const { Icon } = item;
				return (
					<Icon
						key={index}
						className="h-8 w-8 hover:scale-110 duration-200 ease-out"
					/>
				);
			})}
		</div>
	);
}
