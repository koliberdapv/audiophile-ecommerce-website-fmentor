import Wrapper from './HomeWrapper';
import { ColorButton } from '../../components/buttons';
import img_1 from '../../assets/home/mobile/image-header.jpg';

const Home = () => {
	return (
		<Wrapper>
			<div className="width-controller">
				<figure className="background-img">
					<img
						src={img_1}
						alt=""
					/>
				</figure>
				<div className="home-container | grid">
					<p className="overline">new product</p>
					<header>
						<h1>XX99 Mark II headphones</h1>
					</header>
					<p className="info">
						Experience natural, lifelike audio and exceptional build quality
						made for the passionate music enthusiast.
					</p>
					<ColorButton />
				</div>
			</div>
		</Wrapper>
	);
};

export default Home;
