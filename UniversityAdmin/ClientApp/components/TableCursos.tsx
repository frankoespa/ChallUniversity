import React from 'react';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import { ICurso } from '../src/classes/ICurso';
import Button from '@material-ui/core/Button';
import DialogInscribirAlumno from './DialogInscribirAlumno';
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
	items: ICurso[];
	saveInscripcion?: (idC: number) => void;
}

function TableCursos(props: IProps): JSX.Element {
	const { classes, items, saveInscripcion } = props;
	const [showAInscribirDialog, setShowInscribirDialog] = React.useState<boolean>(false);
	const [cursoInscribir, setCursoInscribir] = React.useState<ICurso>(null);

	function handleInscribirDialog(inscribe: boolean) {
		if (inscribe) {
			saveInscripcion(cursoInscribir.id);
			setShowInscribirDialog(false);
			setCursoInscribir(null);
		} else {
			setShowInscribirDialog(false);
			setCursoInscribir(null);
		}
	}

	function verCurso(curso: ICurso) {
		Router.push({ pathname: '/inscriptos', query: { id: curso.id, asignatura: curso.asignatura } });
	}

	return (
		<React.Fragment>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell align='center' className={classes.tableHeader}>
							Asignatura
						</TableCell>
						<TableCell align='center' className={classes.tableHeader}>
							Capacidad Maxima
						</TableCell>
						<TableCell align='center' className={classes.tableHeader}>
							Docente
						</TableCell>
						<TableCell padding='none'></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{items.map((s, key) => (
						<TableRow key={key} hover={true}>
							<TableCell align='center' className={classes.tableCell}>
								{s.asignatura}
							</TableCell>
							<TableCell align='center' className={classes.tableCell}>
								{s.capacidadMax.toString()}
							</TableCell>
							<TableCell align='center' className={classes.tableCell}>
								{s.docente}
							</TableCell>
							<TableCell align='center' padding='none'>
								{saveInscripcion ? (
									<Button
										size='small'
										color='secondary'
										onClick={() => {
											setCursoInscribir(s);
											setShowInscribirDialog(true);
										}}>
										Inscribir
									</Button>
								) : null}

								<Button
									size='small'
									color='secondary'
									onClick={() => {
										verCurso(s);
									}}>
									Info
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			{saveInscripcion ? (
				<DialogInscribirAlumno open={showAInscribirDialog} handleInscribirDialog={handleInscribirDialog}>
					¿ Quieres inscribir a {cursoInscribir ? cursoInscribir.asignatura : ''} ?
				</DialogInscribirAlumno>
			) : null}
		</React.Fragment>
	);
}

export default withStyles(styles)(TableCursos);
