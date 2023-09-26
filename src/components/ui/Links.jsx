import { Link } from 'react-router-dom';
import Wrapper from './Wrappers/LinksWrapper';
import { pagesList } from '../../data/pages_list';

const Links = ({ mobile, column }) => {
	return (
		<Wrapper className={mobile && 'mobile-width'}>
			<ul
				className={
					column ? 'links-container flex flex-column' : 'links-container flex'
				}
			>
				{pagesList.map((link, index) => {
					const { direction, name } = link;
					if (name === 'checkout' || name === 'error') return;
					return (
						<li key={index}>
							<Link to={direction}>
								<p className="subtitle">{name}</p>
							</Link>
						</li>
					);
				})}
			</ul>
		</Wrapper>
	);
};

export default Links;
