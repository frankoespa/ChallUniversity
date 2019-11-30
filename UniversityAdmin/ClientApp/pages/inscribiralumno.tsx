import React from 'react';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import Red from '@material-ui/core/colors/red';
import { useRouter } from 'next/router';
import PanelExpanded from '../components/PanelExpanded';
import { ICurso } from '../src/classes/ICurso';
import TableCursos from '../components/TableCursos';
import moment from 'moment';
import DialogDeleteService from '../components/DialogInscribirAlumno';

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
		},
		textField: {
			width: '100%'
		}
	});

interface IProps extends WithStyles<typeof styles> {}

function inscribiralumno(props: IProps): JSX.Element {
	const { classes } = props;
	let router = useRouter();
	let { id, nombre } = router.query;
	let [cursosNoInscriptos, setCursosNoInscriptos] = React.useState<ICurso[]>([]);
	let [cursosInscriptos, setCursosInscriptos] = React.useState<ICurso[]>([]);

	function saveInscripcion(idC: number) {
		fetch('/api/inscripciones/postinscripciones', {
			method: 'POST',
			body: JSON.stringify({
				AlumnoId: parseInt(id.toString()),
				CursoId: idC,
				fechaInscripcion: moment()
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((response) => {
			console.log(response);
			getCursosNoInscriptos();
			getCursosInscriptos();
		});
	}

	function getCursosNoInscriptos() {
		fetch(`api/cursos/getCursosNoInscriptos/${id}`)
			.then((data) => {
				return data.json() as Promise<ICurso[]>;
			})
			.then((cursos) => {
				console.log(cursos);
				setCursosNoInscriptos(cursos);
			});
	}

	function getCursosInscriptos() {
		fetch(`api/cursos/getCursosInscriptos/${id}`)
			.then((data) => {
				return data.json() as Promise<ICurso[]>;
			})
			.then((cursos) => {
				console.log(cursos);
				setCursosInscriptos(cursos);
			});
	}

	React.useEffect(() => {
		getCursosNoInscriptos();
		getCursosInscriptos();
	}, []);

	return (
		<React.Fragment>
			<PanelExpanded title={`Cursos que se puede inscribir ${nombre}`}>
				<TableCursos items={cursosNoInscriptos} saveInscripcion={saveInscripcion} />
			</PanelExpanded>
			<PanelExpanded title='Cursos Inscriptos'>
				<TableCursos items={cursosInscriptos} />
			</PanelExpanded>
		</React.Fragment>
	);
}

export default withStyles(styles)(inscribiralumno);
