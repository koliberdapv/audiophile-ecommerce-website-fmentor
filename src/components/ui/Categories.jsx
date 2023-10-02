import Wrapper from './Wrappers/CategoriesWrappers';
import { categoryList } from '../../data/category_list';
import { LinkButton } from '../buttons';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/context';

const Categories = ({ homePage }) => {
  const { isSidebarOpen, toggleSidebarOpen, setIsSidebarOpen } =
    useGlobalContext();
  return (
    <Wrapper className={isSidebarOpen ? 'categories-sidebar' : undefined}>
      {isSidebarOpen && (
        <button
          className="sidebar-shadow"
          id="sidebar-shadow"
          onClick={toggleSidebarOpen}
        ></button>
      )}
      <div className="width-controller">
        <ul
          className={
            homePage
              ? 'category-container | grid justify-center homepage-margin'
              : 'category-container | grid justify-center'
          }
        >
          {categoryList.map((category, index) => {
            const { name, image } = category;
            return (
              <Link
                onClick={() => setIsSidebarOpen(false)}
                to={`/category/${name}`}
                className="grid"
                key={index}
              >
                <li className="category | grid justify-center">
                  <figure className="img-container">
                    <img
                      src={image}
                      alt={name}
                      className={
                        name === 'earphones' ? 'earphones-img' : undefined
                      }
                    />
                  </figure>
                  <p className="title">{name}</p>
                  <LinkButton direction={name} />
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Categories;
