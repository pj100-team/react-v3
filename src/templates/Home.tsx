import { CSSProperties } from "react";
import { Link } from "react-router-dom";

const linkStyle: CSSProperties = {
	display: "block",
	width: "200px",
	padding: "12px 0",
	textAlign: "center",
	fontSize: "20px",
};

const Home = () => {
	return (
		<nav
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: "16px",
				marginTop: "50px",
			}}
		>
			<Link to="/practice5" style={linkStyle}>
				TODOList
			</Link>
			<Link to="/practice4" style={linkStyle}>
				addressSearch
			</Link>
		</nav>
	);
};

export default Home;
