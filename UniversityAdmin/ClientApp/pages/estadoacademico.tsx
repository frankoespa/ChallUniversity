import React from 'react';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import Red from '@material-ui/core/colors/red';
import { useRouter } from 'next/router';
import PanelExpanded from '../components/PanelExpanded';
import { IEstado } from '../src/classes/IEstado';
import TableEstado from '../components/TableEstado';
import moment from 'moment';

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
	let [estadoAcademico, setEstadoAcademico] = React.useState<IEstado[]>([]);

	function getEstadoAcademico() {
		fetch(`api/inscripciones/getEstadoAcademico/${id}`)
			.then((data) => {
				return data.json() as Promise<IEstado[]>;
			})
			.then((estados) => {
				var estadosA = estados.map<IEstado>((e) => {
					return {
						asignatura: e.asignatura,
						docente: e.docente,
						fechaInscripcion: moment(e.fechaInscripcion),
						estado: e.estado
					};
				});
				setEstadoAcademico(estadosA);
			});
	}

	React.useEffect(() => {
		getEstadoAcademico();
	}, []);

	return (
		<React.Fragment>
			<PanelExpanded title={`Estado Académico de: ${nombre}`}>
				<TableEstado items={estadoAcademico} />
			</PanelExpanded>
		</React.Fragment>
	);
}

export default withStyles(styles)(inscribiralumno);
