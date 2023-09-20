import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components/ui/';
import Home from './pages/Home/Home';
import Headphones from './pages/Headphones/Headphones';
import Earphones from './pages/Earphones/Earphones';
import Speakers from './pages/Speakers/Speakers';
import Product from './pages/Product/Product';
import Checkout from './pages/Checkout/Checkout';
import Error from './pages/Error/Error';
import { productList } from './data/products/product_list';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<SharedLayout />}
				>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path="/category/headphones"
						element={<Headphones />}
					/>
					<Route
						path="/category/speakers"
						element={<Speakers />}
					/>
					<Route
						path="/category/earphones"
						element={<Earphones />}
					/>
					<Route
						path="/checkout"
						element={<Checkout />}
					/>
					{productList.map((product, index) => {
						return (
							<Route
								path={`/product/${product.link}`}
								key={index}
								element={<product.element />}
							/>
						);
					})}
				</Route>
				<Route
					path="*"
					element={<Error />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
