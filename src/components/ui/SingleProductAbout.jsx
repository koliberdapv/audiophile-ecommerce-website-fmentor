import Wrapper from './Wrappers/SingleProductAboutWrapper';
const SingleProductAbout = ({ data }) => {
	const { features, inTheBox } = data;
	return (
		<Wrapper>
			<div className="width-controller">
				<div className="content-container | grid">
					<section className="features | grid">
						<h3>features</h3>
						<div className="text-container | grid">
							{features.map((text, index) => {
								return <p key={index}>{text}</p>;
							})}
						</div>
					</section>
					<section className="box-kit | grid">
						<h3>in the box</h3>
						<ul className="items-list | grid">
							{inTheBox.map((item, index) => {
								const { equipmentName, quantity } = item;
								return (
									<li
										className="kit-item | grid"
										key={index}
									>
										<p className="quantity">{`${quantity}x`}</p>
										<p className="equipment-name">{equipmentName}</p>
									</li>
								);
							})}
						</ul>
					</section>
				</div>
			</div>
		</Wrapper>
	);
};

export default SingleProductAbout;
