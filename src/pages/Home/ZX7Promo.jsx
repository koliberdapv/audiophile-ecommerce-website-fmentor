import Wrapper from './Wrappers/ZX7PromoWrapper';
import speaker_img_mobile from '../../assets/home/mobile/image-speaker-zx7.jpg';
import speaker_img_tablet from '../../assets/home/tablet/image-speaker-zx7.jpg';
// import speaker_img_tablet from '../../assets/home/tablet/12.png';
import speaker_img_desktop from '../../assets/home/desktop/image-speaker-zx7.jpg';
import { MonochromeButton } from '../../components/buttons';

const ZX7Promo = () => {
	return (
		<Wrapper>
			<div className="width-controller">
				<div className="content-container | grid">
					<figure className="img-container">
						<img
							src={speaker_img_mobile}
							alt="speaker ZX7"
							data-resolution="mobile"
						/>
						<img
							src={speaker_img_tablet}
							alt="speaker ZX7"
							data-resolution="tablet"
						/>
						<img
							src={speaker_img_desktop}
							alt="speaker ZX7"
							data-resolution="desktop"
						/>
					</figure>
					<header className="grid">
						<h4>ZX7 Speaker</h4>
						<MonochromeButton direction="/product/ZX7" />
					</header>
				</div>
			</div>
		</Wrapper>
	);
};

export default ZX7Promo;
