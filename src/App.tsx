import "./App.css";
import { BrowserRouter, Outlet, Route, Routes, useLocation, } from "react-router-dom";
import Home from "./templates/Home";
import Practice4 from "./templates/Practice4";
import Practice5 from "./templates/Practice5";

const Layout = () => {
	const { pathname } = useLocation();
	// Home のときだけヘッダー文言を HOME にする
	const headerTitle = pathname === "/" ? "HOME" : "React-v3";

	return (
		<>
			<header className="bg-[#94A3B8] text-center p-[20px] text-4xl text-[#F9FAFB]">
				{headerTitle}
			</header>
			<Outlet />
		</>
	);
};

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/practice5" element={<Practice5 />} />
					<Route path="/practice4" element={<Practice4 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
