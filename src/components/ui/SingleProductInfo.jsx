import Wrapper from './Wrappers/SingleProductInfoWrapper';
const SingleProductInfo = ({ data }) => {
	const { images, name, description, isNew } = data;
	return (
		<Wrapper>
			<div className="width-controller">
				<div className="content-container | grid">
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
						<h1>{name}</h1>
						<p className="text">{description}</p>
					</section>
				</div>
			</div>
		</Wrapper>
	);
};

export default SingleProductInfo;
