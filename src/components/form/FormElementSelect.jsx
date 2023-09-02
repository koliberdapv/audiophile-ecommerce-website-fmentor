import styled from 'styled-components';
const FormElementSelect = () => {
	const handleClick = (e) => {
		const btn = e.currentTarget.closest('.select-btn');
		const dot = btn.querySelector('.inner-circle');
		btn.classList.toggle('chosen');
		dot.classList.toggle('hidden');
	};
	return (
		<Wrapper>
			<button
				className="select-btn flex align-center"
				onClick={handleClick}
			>
				<div className="outer-circle grid center">
					<div className="inner-circle hidden"></div>
				</div>
				<label>e-Money</label>
			</button>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 19.5rem;
	.select-btn {
		padding: 1.125rem 1.5rem;
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
`;

export default FormElementSelect;
