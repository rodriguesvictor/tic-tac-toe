import './App.css';
import Hashtag from "./components/Hashtag";
import Header from "./components/Header";
import Checkbox from './objects/Checkbox';


const App = () => (
	<main className="app">
		<Header />
		<Hashtag />
		<Checkbox value='show' id='show' content='Mostrar eventos'/>
		
	</main>
);


export default App;
