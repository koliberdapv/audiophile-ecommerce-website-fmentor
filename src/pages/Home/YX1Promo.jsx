import Wrapper from './Wrappers/YX1PromoWrapper';
import earphones_img_mobile from '../../assets/home/mobile/image-earphones-yx1.jpg';
import earphones_img_tablet from '../../assets/home/tablet/image-earphones-yx1.jpg';
import earphones_img_desktop from '../../assets/home/desktop/image-earphones-yx1.jpg';
import { MonochromeButton } from '../../components/buttons';
const YX1Promo = () => {
	return (
		<Wrapper>
			<div className="width-controller">
				<div className="content-container | grid">
					<figure className="img-container">
						<img
							src={earphones_img_mobile}
							alt="earphones YX1"
							data-resolution="mobile"
						/>
						<img
							src={earphones_img_tablet}
							alt="earphones YX1"
							data-resolution="tablet"
						/>
						<img
							src={earphones_img_desktop}
							alt="earphones YX1"
							data-resolution="desktop"
						/>
					</figure>
					<header className="grid">
						<h4>YX1 Earphones</h4>
						<MonochromeButton direction="/product/YX1" />
					</header>
				</div>
			</div>
		</Wrapper>
	);
};

export default YX1Promo;
