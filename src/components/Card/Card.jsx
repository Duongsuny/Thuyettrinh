import { Box, Typography, Stack, Divider } from "@mui/material";
import cardStyle from "./style"
import duong from "../../assets/Duong.png"

//This component prensents a card of a coreteam member
export default function Card(props) {
    return (
        <Box style={cardStyle.BoxStyle}>
            <Stack direction="column">
                <Box style={cardStyle.frameStyle}>
                    <img src={duong} style={cardStyle.imgStyle} />
                </Box>

                <Divider style={{border: "1px solid rgb(255, 255, 255, 0.1)", marginTop: "20px"}}/>

                <Box style={{marginRight: "auto"}} pt="10px">
                    <Typography variant="h6" sx={{ fontWeight: "700" }}>
                        {props.name}
                    </Typography>

                    <Typography variant="body2" sx={{ fontWeight: "300" }}>
                        {props.class}
                    </Typography>
                </Box>

                <Box mt="25px" style={cardStyle.bandStyle}>
                    <Typography variant="body2" sx={{ fontWeight: "600" }}>{props.position}</Typography>
                </Box>
            </Stack >
        </Box >
    );
}