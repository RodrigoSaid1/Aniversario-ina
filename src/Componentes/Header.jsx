import { AppBar, Toolbar, Typography, Container } from "@mui/material";

function Header () {
    return (
        <AppBar position="static" color="primary">
            <Container>
                <Toolbar>
                    <Typography variant="h6" align="center" style={{ flexGrow: 1 }}>
            Tardezinha
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
