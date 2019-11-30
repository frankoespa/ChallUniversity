import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InscIcon from '@material-ui/icons/Edit';
import CustomerIcon from '@material-ui/icons/Group';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from 'next/link';
import Router from 'next/router';

const drawerWidth = 240;

const styles = (theme: Theme) =>
	createStyles({
		root: {
			display: 'flex'
		},
		drawer: {
			[theme.breakpoints.up('sm')]: {
				width: drawerWidth,
				flexShrink: 0
			}
		},
		appBar: {
			marginLeft: drawerWidth,
			[theme.breakpoints.up('sm')]: {
				width: `calc(100% - ${drawerWidth}px)`
			}
		},
		menuButton: {
			marginRight: theme.spacing(2),
			[theme.breakpoints.up('sm')]: {
				display: 'none'
			}
		},
		toolbar: theme.mixins.toolbar,
		drawerPaper: {
			width: drawerWidth
		},
		content: {
			flexGrow: 1,
			padding: theme.spacing(3)
		}
	});

interface Props extends WithStyles<typeof styles> {}

interface IState {
	mobileOpen: boolean;
	title: string;
}

class Layout extends Component<Props, IState> {
	constructor(props) {
		super(props);
		this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
		this.state = {
			mobileOpen: false,
			title: ''
		};
	}

	componentDidMount() {
		this.setState({ title: Router.pathname });
		Router.events.on('routeChangeComplete', (url) => {
			console.log(url);
			var ruta: string = url;
			if (ruta == '/') {
				this.setState({ title: 'Alumnos' });
			} else {
				this.setState({ title: ruta.slice(1, ruta.length - 1) });
			}
		});
	}

	handleDrawerToggle() {
		this.setState({
			mobileOpen: !this.state.mobileOpen
		});
	}

	render() {
		const { children, classes } = this.props;
		const drawer = (
			<div>
				<div className={classes.toolbar} />
				<Divider />
				<List>
					<Link href='/index'>
						<ListItem button>
							<ListItemIcon>{<CustomerIcon />}</ListItemIcon>
							<ListItemText primary='Alumnos' />
						</ListItem>
					</Link>
					<Link href='/asignaturas'>
						<ListItem button>
							<ListItemIcon>{<InscIcon />}</ListItemIcon>
							<ListItemText primary='Asignaturas' />
						</ListItem>
					</Link>
				</List>
			</div>
		);

		return (
			<div className={classes.root}>
				<AppBar position='fixed' className={classes.appBar}>
					<Toolbar>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							edge='start'
							onClick={this.handleDrawerToggle}
							className={classes.menuButton}>
							<MenuIcon />
						</IconButton>
						<Typography variant='h6' noWrap>
							{this.state.title}
						</Typography>
					</Toolbar>
				</AppBar>
				<nav className={classes.drawer} aria-label='mailbox folders'>
					{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
					<Hidden smUp implementation='css'>
						<Drawer
							variant='temporary'
							anchor='left'
							open={this.state.mobileOpen}
							onClose={this.handleDrawerToggle}
							classes={{
								paper: classes.drawerPaper
							}}
							ModalProps={{
								keepMounted: true // Better open performance on mobile.
							}}>
							{drawer}
						</Drawer>
					</Hidden>
					<Hidden xsDown implementation='css'>
						<Drawer
							classes={{
								paper: classes.drawerPaper
							}}
							variant='permanent'
							open>
							{drawer}
						</Drawer>
					</Hidden>
				</nav>
				<main className={classes.content}>
					<div className={classes.toolbar} />
					<Container>{children}</Container>
				</main>
				<style jsx global>{`
					html,
					body,
					#__next {
						height: 100%;
					}
				`}</style>
			</div>
		);
	}
}

export default withStyles(styles)(Layout);
