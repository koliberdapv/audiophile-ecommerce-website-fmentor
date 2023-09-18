import Wrapper from './Wrappers/ProductInfoWrapper';
import { ColorButton } from '../buttons';
export const ProductInfo = ({ data, inverted }) => {
	const { images, name, info, link, isNew } = data;
	return (
		<Wrapper>
			<div className="width-controller">
				<div
					className={`${
						inverted
							? 'content-container | grid inverted'
							: 'content-container | grid'
					}`}
				>
					<figure className="img-container">
						<img
							src={images.mobile}
							alt={name}
							data-resolution="mobile"
						/>
						<img
							src={images.tablet}
							alt={name}
							data-resolution="tablet"
						/>
						<img
							src={images.desktop}
							alt={name}
							data-resolution="desktop"
						/>
					</figure>
					<section className="product-info | grid">
						{isNew && <p className="overline">new product</p>}
						<h2>{name}</h2>
						<p className="text">{info}</p>
						<ColorButton direction={link} />
					</section>
				</div>
			</div>
		</Wrapper>
	);
};
