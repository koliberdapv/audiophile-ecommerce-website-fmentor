import Categories from './Categories';
import Wrapper from './Wrappers/AsideNavWrapper';
const AsideNav = ({ isSidebarOpen, setIsSidebarOpen, onClick }) => {
	return (
		<Wrapper className={isSidebarOpen ? 'aside-nav aside-open' : 'aside-nav'}>
			<Categories
				isSidebarOpen={true}
				setIsSidebarOpen={setIsSidebarOpen}
				onClick={onClick}
			/>
		</Wrapper>
	);
};

export default AsideNav;
