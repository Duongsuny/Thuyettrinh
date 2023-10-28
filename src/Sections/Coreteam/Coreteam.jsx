import { Typography, Box, Stack } from "@mui/material";
import Card from "../../components/Card/Card";
import CoreteamStyle from "./style";
import Carousel from 'react-material-ui-carousel'
import coreteam from "./coreteam.json";

//parse data from json file
let members = JSON.parse(JSON.stringify(coreteam));
function handleData(members) {
    const core = members.coreteam;
    let pos = 0;
    let items = [];
    const dis = members.distribution;

    for(let i = 0; i < dis.length; i++) {
        items.push(core.slice(pos, pos +  dis[i])); //slice by distribution of each band
        pos = pos + dis[i];
    }
    return(items);
}

const items = handleData(members);

export default function Coreteam() {
    return (
        <Box style={CoreteamStyle.Box}>
            <Stack direction="column" pt="100px" style={{ width: "100vw" }} alignItems="center">
                <Typography variant="h4" pt="5vh" sx={{ fontWeight: "600", textAlign: "center" }}>
                    Core team Gen 18
                </Typography>
                <Carousel duration={300} sx={{width: "50vw"}}>
                    {items.map((item) => 
                    <Stack direction="row" mt="50px" spacing={7}>
                        {item.map((card) => <Card name={card.name} class={card.class} position={card.position}></Card>)}
                    </Stack>)}
                </Carousel>
            </Stack>
        </Box>
    );
}