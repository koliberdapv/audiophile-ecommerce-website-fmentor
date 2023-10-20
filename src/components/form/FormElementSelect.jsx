import styled from 'styled-components';
import FormElementSelectOption from './FormElementSelectOption';
const FormElementSelect = ({
	label,
	list,
	selectOption,
	selectOption2,
	changeValue,
	handlePaymentOptionsClick,
}) => {
	const handleClick = (e) => {
		const btn = e.currentTarget.closest('.select-btn');
		const dot = btn.querySelector('.inner-circle');
		btn.classList.toggle('chosen');
		dot.classList.toggle('hidden');
	};
	return (
		<Wrapper>
			<label>{label}</label>
			{list.map((item) => {
				return (
					<FormElementSelectOption
						key={item.id}
						item={item.item}
						value={item.value}
						name={item.name}
						changeValue={changeValue}
						handleClick={handleClick}
						handlePaymentOptionsClick={handlePaymentOptionsClick}
					/>
				);
			})}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: grid;
	label {
		font-size: var(--fs-100);
		text-transform: capitalize;
		font-weight: var(--fw-700);
	}
	.select-btn {
		margin-top: 1rem;
		padding: 0.9rem 1.5rem;
		width: 100%;
		border-radius: var(--br-form);
		border: 1px solid hsl(0, 0%, 81.17%);
		font-size: var(--fs-300);
		justify-content: flex-start;
		gap: 1rem;
		font-weight: var(--fw-600);
		cursor: pointer;
		background-color: transparent;
	}
	.chosen,
	.select-btn:hover {
		border: 1px solid var(--clr-dark-orange);
	}
	.outer-circle {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		border: 1px solid var(--clr-form-border);
	}
	.inner-circle {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: var(--clr-dark-orange);
	}
	p {
		font-weight: var(--fw-700);
	}
	@media screen and (width > 600px) {
		.select-btn {
			max-width: 49%;
			margin-left: auto;
		}
	}
`;

export default FormElementSelect;
