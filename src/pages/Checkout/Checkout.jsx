import { Cart } from '../../components/ui';
import Wrapper from './Wrapper/CheckoutWrapper';
import { BackButton } from '../../components/buttons';

const Checkout = () => {
	return (
		<Wrapper>
			<div className="width-controller">
				<div className="content-container">
					<BackButton />
					<Cart isCheckoutPage={true} />
				</div>
			</div>
		</Wrapper>
	);
};

export default Checkout;
