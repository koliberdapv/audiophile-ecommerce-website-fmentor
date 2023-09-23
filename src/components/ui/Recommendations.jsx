import Wrapper from './Wrappers/RecommendationsWrapper';
import recommendationsList from '../../data/recommendations';
import { ColorButton } from '../buttons';
const Recommendations = ({ data }) => {
	return (
		<Wrapper>
			<div className="width-controller">
				<div className="content-container | grid">
					<header>
						<h3>you may also like</h3>
					</header>
					<ul className="recommendations | grid">
						{data.map((item, index) => {
							const result = recommendationsList.find(
								(rec) => rec.name === item
							);
							const {
								name,
								images: { mobile, tablet, desktop },
								link,
							} = result;
							return (
								<li
									key={index}
									className="single-recommendation | grid"
								>
									<figure className="img-container">
										<img
											src={mobile}
											alt={name}
											data-resolution="mobile"
										/>
										<img
											src={tablet}
											alt={name}
											data-resolution="tablet"
										/>
										<img
											src={desktop}
											alt={name}
											data-resolution="desktop"
										/>
									</figure>
									<h5 className="title">{name}</h5>
									<ColorButton direction={link} />
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</Wrapper>
	);
};

export default Recommendations;
