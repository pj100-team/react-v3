import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Button from "./components/button";
import Practice1 from "./practice1";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<App />
		<Practice1 />
	</React.StrictMode>
);
