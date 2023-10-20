import { useSearchParams } from 'react-router-dom';
import FormElement from '../form/FormElement';
import FormElementSelect from '../form/FormElementSelect';
import Wrapper from './Wrappers/CheckoutFormWrapper';

const CheckoutForm = () => {
	const [searchParams, setSearchParams] = useSearchParams({});
	const userName = searchParams.get('name') || '';
	const email = searchParams.get('email') || '';
	const phoneNumber = searchParams.get('phone') || '';
	const address = searchParams.get('address') || '';
	const zip = searchParams.get('zip') || '';
	const city = searchParams.get('city') || '';
	const country = searchParams.get('country') || '';
	const eMoney = searchParams.get('eMoney') === 'true';
	const cash = searchParams.get('cash') === 'true';

	const selectOptionsList = [
		{
			id: 1,
			name: 'e-Money',
			item: 'eMoney',
			value: eMoney,
		},
		{
			id: 2,
			name: 'Cash on Delivery',
			item: 'cash',
			value: cash,
		},
	];

	const changeValue = (e, searchValue) =>
		setSearchParams(
			(prev) => {
				prev.set(searchValue, e.target.value);
				return prev;
			},
			{ replace: true }
		);

	const handlePaymentOptionsClick = (e) => {
		const button = e.target.closest('button');
		setSearchParams(
			(prev) => {
				prev.set(button.id, 'true');
				return prev;
			},
			{ replace: true }
		);
		console.log(selectOptionsList);
	};
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
							searchValue="name"
							inputValue={userName}
							changeValue={changeValue}
						/>
						<FormElement
							label="email address"
							placeholder="alexei@mail.com"
							searchValue="email"
							inputValue={email}
							changeValue={changeValue}
						/>
						<FormElement
							label="phone number"
							placeholder="+1 202-555-0136"
							searchValue="phone"
							inputValue={phoneNumber}
							changeValue={changeValue}
						/>
					</section>
					<section className="form-section | grid">
						<header className="subtitle">shipping info</header>
						<FormElement
							label="your address"
							placeholder="1137 Williams Avenue"
							searchValue="address"
							inputValue={address}
							changeValue={changeValue}
						/>
						<div className="sub-section | grid">
							<FormElement
								label="zip code"
								placeholder="10001"
								searchValue="zip"
								inputValue={zip}
								changeValue={changeValue}
							/>
							<FormElement
								label="city"
								placeholder="New York"
								searchValue="city"
								inputValue={city}
								changeValue={changeValue}
							/>
							<FormElement
								label="country"
								placeholder="United States"
								searchValue="country"
								inputValue={country}
								changeValue={changeValue}
							/>
						</div>
					</section>
					<section className="form-section | grid">
						<header className="subtitle">payment details</header>
						<FormElementSelect
							label="payment method"
							placeholder="1137 Williams Avenue"
							changeValue={changeValue}
							list={selectOptionsList}
							handlePaymentOptionsClick={handlePaymentOptionsClick}
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
