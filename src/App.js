import './App.css';
import Hashtag from "./components/Hashtag";
import Header from "./components/Header";
import Input from './objects/Input';


const App = () => (
	<main className="app">
		<Header />
		<Hashtag />
		<Input value='show' id='show' type='checkbox' content='Mostrar eventos'/>
		
	</main>
);


export default App;
