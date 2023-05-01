import './App.css';
import Hashtag from "./components/Hashtag";
import Header from "./components/Header";
import Label from './objects/Label';


const App = () => (
	<main className="app">
		<Header />
		<Hashtag />
		<Label content='Mostrar eventos'/>
	</main>
);


export default App;
