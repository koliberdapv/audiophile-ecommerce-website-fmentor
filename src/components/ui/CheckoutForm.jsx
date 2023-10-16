import FormElement from '../form/FormElement';
import FormElementSelect from '../form/FormElementSelect';
import Wrapper from './Wrappers/CheckoutFormWrapper';

const CheckoutForm = () => {
	return (
		<Wrapper>
			<div className="content-container">
				<header>
					<h4>checkout</h4>
				</header>
				<form className="form | grid">
					<header className="subtitle">billing details</header>
					<section className="form-section | grid billing">
						<FormElement
							label="name"
							placeholder="Alexei Ward"
						/>
						<FormElement
							label="email address"
							placeholder="alexei@mail.com"
						/>
						<FormElement
							label="phone number"
							placeholder="+1 202-555-0136"
						/>
					</section>
					<section className="form-section | grid">
						<header className="subtitle">shipping info</header>
						<FormElement
							label="your address"
							placeholder="1137 Williams Avenue"
						/>
						<div className="sub-section | grid">
							<FormElement
								label="zip code"
								placeholder="10001"
							/>
							<FormElement
								label="city"
								placeholder="New York"
							/>
							<FormElement
								label="country"
								placeholder="United States"
							/>
						</div>
					</section>
					<section className="form-section | grid">
						<header className="subtitle">payment details</header>
						<FormElementSelect
							label="payment method"
							placeholder="1137 Williams Avenue"
							selectOption="e-Money"
							selectOption2="Cash on Delivery"
						/>
						<div className="sub-section | grid">
							<FormElement
								label="e-Money number"
								placeholder="238521993"
							/>
							<FormElement
								label="e-Money PIN"
								placeholder="6891"
							/>
						</div>
					</section>
				</form>
			</div>
		</Wrapper>
	);
};

export default CheckoutForm;
