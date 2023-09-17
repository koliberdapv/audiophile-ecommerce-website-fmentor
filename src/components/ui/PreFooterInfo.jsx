import Wrapper from './Wrappers/PreFooterInfoWrapper';
import person_img_mobile from '../../assets/shared/mobile/image-best-gear.jpg';
import person_img_tablet from '../../assets/shared/tablet/image-best-gear.jpg';
import person_img_desktop from '../../assets/shared/desktop/image-best-gear.jpg';
const PreFooterInfo = () => {
	return (
		<Wrapper>
			<div className="width-controller">
				<div className="content-container | grid">
					<figure className="img-container">
						<img
							src={person_img_mobile}
							alt="a person in headphones"
							data-resolution="mobile"
						/>
						<img
							src={person_img_tablet}
							alt="a person in headphones"
							data-resolution="tablet"
						/>
						<img
							src={person_img_desktop}
							alt="a person in headphones"
							data-resolution="desktop"
						/>
					</figure>
					<header className="grid">
						<h2>
							Bringing you the <span>best</span> audio gear
						</h2>
						<p>
							Located at the heart of New York City, Audiophile is the premier
							store for high end headphones, earphones, speakers, and audio
							accessories. We have a large showroom and luxury demonstration
							rooms available for you to browse and experience a wide range of
							our products. Stop by our store to meet some of the fantastic
							people who make Audiophile the best place to buy your portable
							audio equipment.
						</p>
					</header>
				</div>
			</div>
		</Wrapper>
	);
};

export default PreFooterInfo;
