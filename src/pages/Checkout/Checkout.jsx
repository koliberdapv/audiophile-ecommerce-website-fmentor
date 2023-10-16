import { Cart, CheckoutForm } from '../../components/ui';
import Wrapper from './Wrapper/CheckoutWrapper';
import { BackButton } from '../../components/buttons';

const Checkout = () => {
	return (
		<Wrapper>
			<div className="width-controller">
				<BackButton />
				<div className="content-container | grid global-container">
					<CheckoutForm />
					<Cart isCheckoutPage={true} />
				</div>
			</div>
		</Wrapper>
	);
};

export default Checkout;
