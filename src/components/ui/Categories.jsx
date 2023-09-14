import Wrapper from './Wrappers/CategoriesWrappers';
import headphones_img from '../../assets/shared/categories/headphones-mobile.png';
import speakers_img from '../../assets/shared/categories/speakers-mobile.png';
import earphones_img from '../../assets/shared/categories/earbuds-mobile.png';
import { useState } from 'react';
import { LinkButton } from '../buttons';
const Categories = () => {
	const [categoryList, setCategoryList] = useState([
		'headphones',
		'speakers',
		'earphones',
	]);
	return (
		<Wrapper>
			<div className="width-controller">
				<ul className="category-container | grid justify-center">
					{categoryList.map((category, index) => {
						return (
							<li
								key={index}
								className="category | grid justify-center"
							>
								<figure className="img-container">
									{category === 'headphones' && (
										<img
											src={headphones_img}
											alt="headphones"
										/>
									)}
									{category === 'speakers' && (
										<img
											src={speakers_img}
											alt="speakers"
										/>
									)}
									{category === 'earphones' && (
										<img
											src={earphones_img}
											alt="earphones"
											className="earphones-img"
										/>
									)}
								</figure>
								<p className="title">{category}</p>
								<LinkButton direction={category} />
							</li>
						);
					})}
				</ul>
			</div>
		</Wrapper>
	);
};

export default Categories;
