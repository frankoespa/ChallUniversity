import React from 'react';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DialogAddAlumno from './DialogAddAlumno';
import { IAlumno } from '../src/classes/IAlumno';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Router from 'next/router';

const styles = (theme: Theme) =>
	createStyles({
		tableCell: {
			wordBreak: 'break-word'
		},
		tableHeader: {
			fontSize: theme.typography.pxToRem(14)
		}
	});

interface IProps extends WithStyles<typeof styles> {
	items: IAlumno[];
	isEstado?: boolean;
	getAlumnos?: () => void;
}

function TableAlumnos(props: IProps): JSX.Element {
	const { classes, items, getAlumnos, isEstado } = props;
	const [showAddAlumnoDialog, setShowAddAlumnoDialog] = React.useState<boolean>(false);

	const handleAddAlumnoDialog = () => {
		setShowAddAlumnoDialog(false);
	};

	const handleIconAddServiceDialog = () => {
		setShowAddAlumnoDialog(true);
	};

	const handleIconEditServiceDialog = (id: number) => {
		Router.push({
			pathname: '/edicionalumno',
			query: {
				id
			}
		});
	};

	return (
		<Table>
			<TableHead>
				<TableRow>
					{isEstado ? null : (
						<TableCell align='left' padding='none'>
							<Tooltip title='Agregar'>
								<IconButton aria-label='filter list' onClick={() => handleIconAddServiceDialog()}>
									<AddIcon />
								</IconButton>
							</Tooltip>
						</TableCell>
					)}
					<TableCell align='center' className={classes.tableHeader}>
						Nombre
					</TableCell>
					<TableCell align='center' className={classes.tableHeader}>
						Legajo
					</TableCell>
					<TableCell align='center' className={classes.tableHeader}>
						Edad
					</TableCell>
					<TableCell align='center' className={classes.tableHeader}>
						FechaNacimiento
					</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{items.map((s, key) => (
					<TableRow key={key} hover={true}>
						{isEstado ? null : (
							<TableCell align='left' padding='none'>
								<Tooltip title='Editar'>
									<IconButton
										aria-label='filter list'
										onClick={() => {
											handleIconEditServiceDialog(s.id);
										}}>
										<EditIcon />
									</IconButton>
								</Tooltip>
							</TableCell>
						)}
						<TableCell align='center' className={classes.tableCell}>
							{s.nombre}
						</TableCell>
						<TableCell align='center' className={classes.tableCell}>
							{s.legajo}
						</TableCell>
						<TableCell align='center' className={classes.tableCell}>
							{s.edad}
						</TableCell>
						<TableCell align='center' className={classes.tableCell}>
							{s.fechaNacimiento.format('MM/DD/YYYY')}
						</TableCell>
						{isEstado ? null : (
							<TableCell align='center' padding='none'>
								<Button
									size='small'
									color='secondary'
									onClick={() => {
										Router.push({ pathname: '/inscribiralumno', query: { id: s.id, nombre: s.nombre } });
									}}>
									Inscribir
								</Button>
								<Button
									size='small'
									color='secondary'
									onClick={() => {
										Router.push({ pathname: '/estadoacademico', query: { id: s.id, nombre: s.nombre } });
									}}>
									Ver Estado
								</Button>
							</TableCell>
						)}
					</TableRow>
				))}
			</TableBody>
			<DialogAddAlumno open={showAddAlumnoDialog} handleAddAlumnoDialog={handleAddAlumnoDialog} getAlumnos={getAlumnos} />
		</Table>
	);
}

export default withStyles(styles)(TableAlumnos);
