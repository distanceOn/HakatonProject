import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "../redux/selectors";
import { setLogout } from "../redux/slices/user";
import { useNavigate } from "react-router-dom";

function ResponsiveAppBar() {
	const dispatch = useDispatch();
	const handleLogout = () => {
		// Здесь может быть ваша логика для выполнения выхода пользователя (логаут)
		// Например, отправка запроса на сервер или очистка данных пользователя
		// после успешного выхода, диспатчим экшен setLogout для обновления стейта
		dispatch(setLogout());
		// Закрываем меню после выполнения действий
		console.log("вышел");
		handleCloseUserMenu();
	};

	const handleProfileClick = () => {
		// Здесь может быть ваша логика для выполнения выхода пользователя (логаут)
		// Например, отправка запроса на сервер или очистка данных пользователя
		// после успешного выхода, диспатчим экшен setLogout для обновления стейта
		// dispatch(setLogout());
		// Закрываем меню после выполнения действий
		console.log("Профиль");
		handleCloseUserMenu();
	};

	const navigate = useNavigate();

	const handleLoginClick = () => {
		console.log("Войти");
		navigate("/login");
	};
	const handleCatalog = () => {
		console.log("Каталог");
	};
	const handleHelp = () => {
		console.log("Помощь");
	};
	const user = useSelector(selectUserId);
	const pages = {
		Каталог: handleCatalog,
		Помощь: handleHelp,
		[user ? "Выйти" : "Войти"]: user ? handleLogout : handleLoginClick,
	};

	const settings = {
		Профиль: handleProfileClick,
		[user ? "Выйти" : "Войти"]: user ? handleLogout : handleLoginClick,
	};

	console.log(user);

	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="static" sx={{ bgcolor: "#ffd700" }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "black", // Изменяем цвет текста на черный
							textDecoration: "none",
						}}
					>
						POSTUPAWKA
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{Object.entries(pages).map(([page, handleClick]) => (
								<MenuItem key={page} onClick={handleClick}>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "#000",
							textDecoration: "none",
						}}
					>
						POSTUPAWKA
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{Object.entries(pages).map(([page, handleClick]) => (
							<MenuItem key={page} onClick={handleClick}>
								<Typography textAlign="center" sx={{ color: "#000" }}>
									{page}
								</Typography>
							</MenuItem>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								{user ? (
									`+7 ${user}`
								) : (
									<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
								)}
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{Object.entries(settings).map(([setting, handleClick]) => (
								<MenuItem key={setting} onClick={handleClick}>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default ResponsiveAppBar;
