import { useGlobalContext } from '../../context/context';
import Categories from './Categories';
import Wrapper from './Wrappers/AsideNavWrapper';
const AsideNav = () => {
  const { isSidebarOpen } = useGlobalContext();
  return (
    <Wrapper className={isSidebarOpen ? 'aside-nav aside-open' : 'aside-nav'}>
      <Categories isSidebarOpen={true} />
    </Wrapper>
  );
};

export default AsideNav;
