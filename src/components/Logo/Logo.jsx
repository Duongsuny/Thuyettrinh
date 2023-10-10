import logo from "../../assets/logo.png";

export default function Logo () {
    return(
            <img style={style} src={logo} alt="logo"/>
    );
}

const style = {
    width: "115px",
    paddingBottom: "6px",
    cursor: "pointer"
}