import React, { Children } from 'react';
import { Theme, createStyles, makeStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Red from '@material-ui/core/colors/red';

const styles = (theme: Theme) =>
	createStyles({
		buttonCancel: {
			'&:hover': {
				borderColor: 'inherit',
				backgroundColor: Red[500],
				color: 'white'
			},
			color: Red[500],
			borderColor: Red[500]
		},
		titleDialog: {
			textAlign: 'center'
		}
	});

interface IProps extends WithStyles<typeof styles> {
	open: boolean;
	children?: JSX.Element[] | JSX.Element | string[];
	handleInscribirDialog: (inscribe: boolean) => void;
}

function DialogInscribirAlumno(props: IProps): JSX.Element {
	const { classes, open, handleInscribirDialog, children } = props;

	return (
		<Dialog
			open={open}
			onClose={() => {}}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'
			fullWidth={true}
			maxWidth='sm'>
			<DialogTitle id='alert-dialog-title' className={classes.titleDialog}>
				{children}
			</DialogTitle>
			<DialogContent>
				<DialogContentText id='alert-dialog-description'></DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button variant='outlined' color='primary' onClick={() => handleInscribirDialog(false)} className={classes.buttonCancel}>
					Cancelar
				</Button>
				<Button
					variant='outlined'
					color='primary'
					autoFocus
					onClick={() => {
						handleInscribirDialog(true);
					}}>
					Aceptar
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default withStyles(styles)(DialogInscribirAlumno);
