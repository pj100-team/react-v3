import {Link} from "react-router-dom";
import {type CSSProperties} from "react";

const Home = () => {
    const homeStyle: CSSProperties = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
        marginTop: "80px"
    };
    const linkStyle = {
        color: "#000000",
        textDecoration: "none",
        fontSize: "24px"
    };

    return(
        <div
            style = {homeStyle}
        >
            <Link 
                to = "/practice4"
                style = {linkStyle}
            >
                AddressSearch
            </Link>
            <Link 
                to = "/practice5"
                style = {linkStyle}
            >
                TodoList
            </Link>
        </div>
    );
};

export default Home;