import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

const pages = [
  { name: "Home", link: "/Home" },
  { name: "Biblioteca", link: "/Biblioteca" },
  { name: "Perguntas", link: "/Pergunta" },
];

function NavbarSimples() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      className="p-5 bg-black"
      sx={{ backgroundColor: "black" }}
      position="fixed"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            className="ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 bg-black border-4 rounded-lg p-1 text-white -rotate-6"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 900,
              textDecoration: "none",
            }}
          >
            EXPLICA.<span className="text-violet-400">AI</span>
          </Typography>

          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            className="bg-black border-4 rounded-lg p-1 text-white -rotate-6"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            EXPLICA.<span className="text-violet-300">AI</span>
          </Typography>
          <Box  sx={{justifyContent:"flex-end", flexGrow: 90, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <a href={page.link}>
                  <MenuItem key={page.link} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                </a>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              justifyContent: "flex-end",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <a className="hover:text-violet-400" href={page.link}>
                <MenuItem key={page.link} onClick={handleCloseNavMenu}>
                  <Typography
                    className="hover:text-violet-400"
                    fontWeight={500}
                    textAlign="center"
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              </a>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavbarSimples;
