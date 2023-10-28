import { Typography, Box, Stack } from "@mui/material";
import Card from "../../components/Card/Card";
import CoreteamStyle from "./style";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

export default function Coreteam() {
    return (
        <Box style={CoreteamStyle.Box}>
            <Stack direction="column" pt="100px" style={{ width: "100vw" }} alignItems="center">
                <Typography variant="h4" pt="5vh" sx={{ fontWeight: "600", textAlign: "center" }}>
                    Ban Truyền thông
                </Typography>

                <Stack direction="row" mt="50px" spacing={7}>
                    <Card name="Đinh Thu Phương" position="Trưởng ban Truyền thông" />
                    <Card name="Nguyễn N.Bảo Trân" position="Phó ban Truyền thông" />
                    <Card name="Nguyễn Minh Tuấn" position="Phó ban Truyền thông" />
                </Stack>

            </Stack>
        </Box>
    );
}