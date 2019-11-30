import React from 'react';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import { IEstado } from '../src/classes/IEstado';

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
	items: IEstado[];
}

function TableEstado(props: IProps): JSX.Element {
	const { classes, items } = props;

	return (
		<Table>
			<TableHead>
				<TableRow>
					<TableCell align='center' className={classes.tableHeader}>
						Asignatura
					</TableCell>
					<TableCell align='center' className={classes.tableHeader}>
						Docente
					</TableCell>
					<TableCell align='center' className={classes.tableHeader}>
						Fecha Inscripcion
					</TableCell>
					<TableCell align='center' className={classes.tableHeader}>
						Estado
					</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{items.map((s, key) => (
					<TableRow key={key} hover={true}>
						<TableCell align='center' className={classes.tableCell}>
							{s.asignatura}
						</TableCell>
						<TableCell align='center' className={classes.tableCell}>
							{s.docente}
						</TableCell>
						<TableCell align='center' className={classes.tableCell}>
							{s.fechaInscripcion.format('MM/DD/YYYY')}
						</TableCell>
						<TableCell align='center' className={classes.tableCell}>
							{s.estado}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}

export default withStyles(styles)(TableEstado);
