import Wrapper from './Wrappers/SingleProductGalleryWrapper';
const SingleProductGallery = ({ data }) => {
	return (
		<Wrapper>
			<div className="width-controller">
				<div className="content-container | grid">
					{data.map((image, index) => {
						const { mobile, tablet, desktop, alt } = image;
						return (
							<figure
								className="img-container"
								key={index}
							>
								<img
									src={mobile}
									alt={alt}
									data-resolution="mobile"
								/>
								<img
									src={tablet}
									alt={alt}
									data-resolution="tablet"
								/>
								<img
									src={desktop}
									alt={alt}
									data-resolution="desktop"
								/>
							</figure>
						);
					})}
				</div>
			</div>
		</Wrapper>
	);
};

export default SingleProductGallery;
