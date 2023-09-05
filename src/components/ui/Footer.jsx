import { Logo, Links, Socials } from '.';
import Wrapper from './Wrappers/FooterWrapper';

const Footer = () => {
	return (
		<Wrapper>
			<div className="footer-container | flex align-center justify-center">
				<Logo />
				<Links column={true} />
				<p className="text">
					Audiophile is an all in one stop to fulfill your audio needs. We're a
					small team of music lovers and sound specialists who are devoted to
					helping you get the most out of personal audio. Come and visit our
					demo facility - we're open 7 days a week.
				</p>
				<p className="text date">
					Copyright {new Date().getFullYear()}. All Rights Reserved
				</p>
				<Socials />
			</div>
		</Wrapper>
	);
};

export default Footer;
