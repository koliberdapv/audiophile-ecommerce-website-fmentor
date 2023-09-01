import {
	ColorButton,
	LinkButton,
	MonochromeButton,
} from './components/buttons/';
function App() {
	return (
		<div className="flex column">
			<h1>Lorem, ipsum.</h1>
			<h2>Lorem, ipsum.</h2>
			<h3>Lorem, ipsum.</h3>
			<h4>Lorem, ipsum.</h4>
			<h5>Lorem, ipsum.</h5>
			<h6>Lorem, ipsum.</h6>
			<p className="overline">Lorem, ipsum.</p>
			<p className="subtitle">Lorem, ipsum.</p>
			<p>Lorem, ipsum.</p>
			<ColorButton />
			<MonochromeButton />
			<LinkButton />
		</div>
	);
}

export default App;
