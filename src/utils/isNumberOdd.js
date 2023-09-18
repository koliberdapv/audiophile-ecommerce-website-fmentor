const isNumberOdd = (n) => {
	if ((n | 1) > n) return false;
	else return true;
};
export default isNumberOdd;
