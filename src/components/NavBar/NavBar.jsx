import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import navBarStyle from "./style";
import Logo from "../Logo/Logo";

export default function NavBar() {
    return (
        <AppBar sx={navBarStyle.appBarStyle}>
            <Toolbar style={navBarStyle.toolbarStyle}>
                <Logo />
                <Stack direction="row" spacing={4} sx={navBarStyle.stackStyle}>
                    <Typography sx={navBarStyle.typographyStyle}><b>Giới thiệu</b></Typography>
                    <Typography sx={navBarStyle.typographyStyle}><b>Core team</b></Typography>
                    <Typography sx={navBarStyle.typographyStyle}><b>Gallery</b></Typography>
                    <Typography sx={navBarStyle.typographyStyle}><b>Tôi Bản lĩnh</b></Typography>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}
