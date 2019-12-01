import React from 'react';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import Red from '@material-ui/core/colors/red';
import { useRouter } from 'next/router';
import PanelExpanded from '../components/PanelExpanded';
import { IEstado } from '../src/classes/IEstado';
import moment from 'moment';
import { IAlumno } from '../src/classes/IAlumno';
import TableAlumnos from '../components/TableAlumnos';

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

function inscriptos(props: IProps): JSX.Element {
	const { classes } = props;
	let router = useRouter();
	let { id, asignatura, docente } = router.query;
	let [alumnosInscriptos, setalumnosInscriptos] = React.useState<IAlumno[]>([]);

	function getAlumnosInscriptos() {
		fetch(`api/inscripciones/getInscriptosaCurso/${id}`)
			.then((data) => {
				return data.json() as Promise<IAlumno[]>;
			})
			.then((alumnos) => {
				var estadosA = alumnos.map<IAlumno>((a) => {
					return {
						legajo: a.legajo,
						nombre: a.nombre,
						edad: a.edad,
						fechaNacimiento: moment(a.fechaNacimiento)
					};
				});
				setalumnosInscriptos(estadosA);
			});
	}

	React.useEffect(() => {
		getAlumnosInscriptos();
	}, []);

	return (
		<React.Fragment>
			<PanelExpanded title={`Alumnos inscriptos a: ${asignatura} (Docente: ${docente})`}>
				<TableAlumnos items={alumnosInscriptos} isEstado={true} />
			</PanelExpanded>
		</React.Fragment>
	);
}

export default withStyles(styles)(inscriptos);
