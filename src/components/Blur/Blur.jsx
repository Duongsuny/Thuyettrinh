import blur from "../../assets/blur.png";

export default function Blur () {
    return(
            <img style={style} src={blur} alt="logo" draggable="false" />
    );
}

const style = {
    width: "750px",
    paddingLeft: "1150px",
    paddingBottom: "200px",
}