import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import navBarStyle from "./style";
import Logo from "../Logo/Logo";
import { useMediaQuery } from "@mui/material";

export default function NavBar() {
    const matches = useMediaQuery('(min-width:700px)');
    console.log(matches);

    if (matches) {
        return (
            <AppBar sx={navBarStyle.appBarStyle}>
                <Toolbar style={navBarStyle.toolbarStyle}>
                    <Logo />
                    <nav>
                        <Stack direction="row" spacing={4} sx={navBarStyle.stackStyle}>
                            <Typography sx={navBarStyle.typographyStyle}><b>Giới thiệu</b></Typography>
                            <Typography sx={navBarStyle.typographyStyle}><b>Core team</b></Typography>
                            <Typography sx={navBarStyle.typographyStyle}><b>Gallery</b></Typography>
                            <Typography sx={navBarStyle.typographyStyle}><b>Tôi Bản lĩnh</b></Typography>
                        </Stack>
                    </nav>
                </Toolbar>
            </AppBar>
        );
    } else {
        return (<AppBar sx={navBarStyle.appBarStyle}>
            <Toolbar style={navBarStyle.toolbarSmStyle}>
                <Logo />
            </Toolbar>
        </AppBar>
        );
    }

}
