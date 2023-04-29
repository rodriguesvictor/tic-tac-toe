import Header from "./components/Header";
import Card from "./objects/Card";
import Player from "./objects/Player";

function App() {
	return (
		<>
		<Header />
		<Card>
		<Player player='o'/> 
		</Card>
		</>
	);
}

export default App;
