import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components/ui/';
import { productList } from './data/product_list';
import { pagesList } from './data/pages_list';
import Product from './pages/Product/Product';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<SharedLayout />}
				>
					{pagesList.map((page, index) => {
						const { name, direction, ElementName } = page;
						return (
							<Route
								index={name === 'home'}
								key={index}
								path={direction}
								element={<ElementName />}
							/>
						);
					})}
					{productList.map((product, index) => {
						const { direction, ElementName } = product;
						return (
							<Route
								key={index}
								path={direction}
								// element={<ElementName product={product} />}
								element={<Product product={product} />}
							/>
						);
					})}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
