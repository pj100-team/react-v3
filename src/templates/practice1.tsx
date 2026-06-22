import Button from "../components/button";

const Practice1 = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "1rem", marginTop: "3rem" }}>
      <Button
        label="button1"
        backgroundColor="#f87171"
        textColor="#f9fafb"
        onClick={() => console.log("button1")}
      />
      <Button
        label="button2"
        backgroundColor="#fcd34d"
        textColor="#f9fafb"
        onClick={() => console.log("button2")}
      />
      <Button
        label="button3"
        backgroundColor="#86efac"
        textColor="#f9fafb"
        onClick={() => console.log("button3")}
      />
    </div>
  );
};

export default Practice1;
