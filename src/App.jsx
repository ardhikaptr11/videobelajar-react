import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "@pages/Login/Login";
import Register from "@pages/Register/Register";
import Home from "@pages/Home/Home";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
