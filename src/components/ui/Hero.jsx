import { ColorButton } from '../buttons/';
import hero_img_mobile from '../../assets/home/mobile/image-header.jpg';
import hero_img_tablet from '../../assets/home/tablet/image-header.jpg';
import hero_img_desktop from '../../assets/home/desktop/image-hero.jpg';
import Wrapper from './Wrappers/HeroWrapper';
const Hero = () => {
	return (
		<Wrapper>
			<div className="width-controller">
				<figure className="background-img">
					<img
						src={hero_img_mobile}
						alt="black headphones"
						data-resolution="mobile"
					/>
					<img
						src={hero_img_tablet}
						alt="black headphones"
						data-resolution="tablet"
					/>
					<img
						src={hero_img_desktop}
						alt="black headphones"
						data-resolution="desktop"
					/>
				</figure>
				<div className="home-container | grid">
					<p className="overline">new product</p>
					<header>
						<h1>XX99 Mark II headphones</h1>
					</header>
					<p className="info">
						Experience natural, lifelike audio and exceptional build quality
						made for the passionate music enthusiast.
					</p>
					<ColorButton />
				</div>
			</div>
		</Wrapper>
	);
};

export default Hero;
