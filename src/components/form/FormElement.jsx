import styled from 'styled-components';
const FormElement = ({
	label,
	placeholder,
	searchValue,
	inputValue,
	changeValue,
}) => {
	return (
		<Wrapper>
			<div className="flex align-center justify-space">
				<label
					name=""
					id=""
					className=""
				>
					{label}
				</label>
				<p className="error hidden">Wrong format</p>
			</div>
			<input
				type="text"
				placeholder={placeholder}
				className=""
				value={inputValue}
				onChange={(e) => changeValue(e, searchValue)}
			/>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	label {
		font-size: var(--fs-100);
		text-transform: capitalize;
		margin-bottom: 0.5rem;
		font-weight: var(--fw-700);
	}
	.error {
		font-size: var(--fs-100);
		color: var(--clr-invalid);
	}
	input {
		padding: 1.125rem 1.5rem;
		width: 100%;
		border-radius: var(--br-form);
		border: 1px solid var(--clr-form-border);
		font-size: var(--fs-300);
		font-weight: var(--fw-600);
	}
	input:focus {
		border: 1px solid var(--clr-dark-orange);
		outline: transparent;
	}
	input::placeholder {
		font-size: var(--fs-300);
		font-weight: var(--fw-500);
	}
	.invalid {
		border: 2px solid var(--clr-invalid);
	}
`;

export default FormElement;
