import { Typography, Box, Stack } from "@mui/material";
import Card from "../../components/Card/Card";
import CoreteamStyle from "./style"

export default function Coreteam() {
    return (
        <Box style={CoreteamStyle.Box}>
            <Stack direction="column" pt="10vh" alignItems="center">
                <Typography variant="h4" pt="5vh" sx={{ fontWeight: "600", textAlign: "center" }}>
                    BAN CHỦ NHIỆM GEN 18
                </Typography>

                <Stack direction="row" pt="10vh" spacing={7}>
                    <Card name="Lê Quý Dương" position="Phó ban Truyền thông"/>
                    <Card name="Bùi Mai Hương" position="Phó Chủ nhiệm CLB"/>
                    <Card name="Đoàn Ngọc Đức" position="Phó Chủ nhiệm CLB"/>
                </Stack>
            </Stack>
        </Box>
    );
}