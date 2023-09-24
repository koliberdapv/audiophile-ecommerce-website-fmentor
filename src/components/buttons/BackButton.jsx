import styled from 'styled-components';

const BackButton = () => {
	const handleClick = () => {
		window.history.back();
	};
	return (
		<button
			onClick={handleClick}
			className="back-btn"
		>
			<p>go back</p>
		</button>
	);
};

export default BackButton;
