import { Link } from 'react-router-dom';
import Wrapper from './Wrappers/LinksWrapper';

const Links = ({ mobile, column }) => {
	return (
		<Wrapper className={mobile && 'mobile-width'}>
			<div>
				<ul
					className={
						column ? 'links-container flex flex-column' : 'links-container flex'
					}
				>
					<li>
						<Link to="/">
							<p className="subtitle">home</p>
						</Link>
					</li>
					<li>
						<Link to="/category/headphones">
							<p className="subtitle">headphones</p>
						</Link>
					</li>
					<li>
						<Link to="/category/speakers">
							<p className="subtitle">speakers</p>
						</Link>
					</li>
					<li>
						<Link to="/category/earphones">
							<p className="subtitle">earphones</p>
						</Link>
					</li>
				</ul>
			</div>
		</Wrapper>
	);
};

export default Links;
