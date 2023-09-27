import Categories from './Categories';
import Wrapper from './Wrappers/AsideNavWrapper';
const AsideNav = ({ isSidebarOpen, setIsSidebarOpen }) => {
	if (!isSidebarOpen) return;
	return (
		<Wrapper className="aside-nav">
			<Categories
				isSidebarOpen={true}
				setIsSidebarOpen={setIsSidebarOpen}
			/>
		</Wrapper>
	);
};

export default AsideNav;
