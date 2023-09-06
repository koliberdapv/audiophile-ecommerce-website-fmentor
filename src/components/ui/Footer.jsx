import { Logo, Links, Socials } from '.';
import Wrapper from './Wrappers/FooterWrapper';

const Footer = () => {
	return (
		<Wrapper>
			<div className="width-controller">
				<div className="footer-container | grid">
					<div className="orange-line"></div>
					<Logo />
					<Links column={true} />
					<p className="text info">
						Audiophile is an all in one stop to fulfill your audio needs. We're
						a small team of music lovers and sound specialists who are devoted
						to helping you get the most out of personal audio. Come and visit
						our demo facility - we're open 7 days a week.
					</p>
					<div className="date-socials | flex align-center flex-column">
						<p className="text date">
							Copyright {new Date().getFullYear()}. All Rights Reserved
						</p>
						<Socials />
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default Footer;
