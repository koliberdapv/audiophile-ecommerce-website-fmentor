import Wrapper from './Wrappers/CategoriesWrappers';
import { categoryList } from '../../data/category_list';
import { LinkButton } from '../buttons';
import { Link } from 'react-router-dom';

const Categories = ({ homePage }) => {
	return (
		<Wrapper>
			<div className="width-controller">
				<ul
					className={`category-container | grid justify-center ${
						homePage && 'homepage-margin'
					}`}
				>
					{categoryList.map((category, index) => {
						const { name, image } = category;
						return (
							<Link
								to={`/category/${name}`}
								className="grid"
							>
								<li
									key={index}
									className="category | grid justify-center"
								>
									<figure className="img-container">
										<img
											src={image}
											alt={name}
											className={name === 'earphones' && 'earphones-img'}
										/>
									</figure>
									<p className="title">{name}</p>
									<LinkButton direction={name} />
								</li>
							</Link>
						);
					})}
				</ul>
			</div>
		</Wrapper>
	);
};

export default Categories;
