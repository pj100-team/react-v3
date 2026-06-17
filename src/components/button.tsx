import { Practice1 } from "../templates/practice1";

export const Button = () => {

	return (
		<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "1rem", marginTop: "3rem" }}>
			<Practice1
			name="button1"
			style={{ borderColor: "#f87171", backgroundColor: "#f87171", color: "#f9fafb", borderRadius: "0.375rem", padding: "0.75rem 3.5rem", fontSize: "1.125rem" }}
			onClick={() => console.log("button1")} />
			<Practice1
			name="button2"
			style={{ borderColor: "#fcd34d", backgroundColor: "#fcd34d", color: "#f9fafb", borderRadius: "0.375rem", padding: "0.75rem 3.5rem", fontSize: "1.125rem" }}
			onClick={() => console.log("button2")} />
			<Practice1
			name="button3"
			style={{ borderColor: "#86efac", backgroundColor: "#86efac", color: "#f9fafb", borderRadius: "0.375rem", padding: "0.75rem 3.5rem", fontSize: "1.125rem" }}
			onClick={() => console.log("button3")} />
		</div>
	);
}