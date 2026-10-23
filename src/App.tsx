import "./App.css";
import Home from "./templates/Home";
import Practice4 from "./templates/Practice4";
import Practice5 from "./templates/Practice5";
import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom";

const Header = () => {
	const location = useLocation();
	return(
		<header className="bg-[#94A3B8] text-center p-[20px] text-4xl text-[#F9FAFB]">
			{location.pathname === "/" ? "Home" : "React-v3"}
		</header>
	);
};

const App = () => {
	return (
		<BrowserRouter>
			<Header/>

			<Routes>
				<Route path = "/" element = {<Home/>}/>
				<Route path = "/practice4" element = {<Practice4/>}/>
				<Route path = "/practice5" element = {<Practice5/>}/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;