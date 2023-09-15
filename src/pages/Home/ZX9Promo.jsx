import Wrapper from './Wrappers/ZX9PromoWrapper';
import { MonochromeButton } from '../../components/buttons';
import speaker_img_mobile from '../../assets/home/mobile/image-speaker-zx9.png';
import speaker_img_tablet from '../../assets/home/tablet/image-speaker-zx9.png';
import speaker_img_desktop from '../../assets/home/desktop/image-speaker-zx9.png';
import pattern from '../../assets/home/desktop/pattern-circles.svg';

const ZX9Promo = () => {
	return (
		<Wrapper>
			<div className="width-controller">
				<div className="content-container | grid">
					<figure className="img-container | grid ">
						<img
							src={pattern}
							alt="circle-pattern"
							className="pattern"
						/>
						<img
							src={speaker_img_mobile}
							alt="speaker ZX9"
							data-resolution="mobile"
						/>
						<img
							src={speaker_img_tablet}
							alt="speaker ZX9"
							data-resolution="tablet"
						/>
						<img
							src={speaker_img_desktop}
							alt="speaker ZX9"
							data-resolution="desktop"
						/>
					</figure>
					<header className="grid">
						<h2>
							ZX9 <br />
							speaker
						</h2>
						<p className="info">
							Upgrade to premium speakers that are phenomenally built to deliver
							truly remarkable sound.
						</p>
						<MonochromeButton
							direction="/product/ZX9"
							inverted
						/>
					</header>
				</div>
			</div>
		</Wrapper>
	);
};

export default ZX9Promo;
