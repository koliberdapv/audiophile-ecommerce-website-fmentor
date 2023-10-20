import { useEffect } from 'react';
import styled from 'styled-components';

const FormElementSelectOption = ({
	handleClick,
	item,
	value,
	name,
	handlePaymentOptionsClick,
}) => {
	useEffect(() => {}, [value]);
	return (
		<Wrapper>
			<button
				className={`${
					value
						? 'select-btn flex align-center chosen'
						: 'select-btn flex align-center'
				}`}
				onClick={(e) => {
					handlePaymentOptionsClick(e);
				}}
				type="button"
				value={value}
				id={item}
			>
				<div className="outer-circle grid center">
					<div
						className={`${
							value === 'true' ? 'inner-circle' : 'inner-circle hidden'
						}`}
					></div>
				</div>
				<p>{name}</p>
			</button>
		</Wrapper>
	);
};

const Wrapper = styled.div``;

export default FormElementSelectOption;
