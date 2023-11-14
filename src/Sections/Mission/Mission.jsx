import MissionStyle from "./style";
import { Box, Grid, Stack, Typography } from "@mui/material";

export default function Mission() {
    return (<Box style={MissionStyle.Box}>
        <Grid container mt={-15}>
            <Grid>
                <Stack ml={20} direction="column" spacing={4}>
                    <Typography>
                        CLB THUYẾT TRÌNH - TRƯỜNG ĐẠI HỌC CÔNG NGHỆ
                    </Typography>

                    <Typography variant="h3">
                        Giá trị kỹ năng và cuộc sống
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
    </Box>)
}
