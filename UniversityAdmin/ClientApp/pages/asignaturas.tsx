import React, { Component } from 'react';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import PanelExpanded from '../components/PanelExpanded';
import { ICurso } from '../src/classes/ICurso';
import TableCursos from '../components/TableCursos';

const styles = (theme: Theme) =>
	createStyles({
		textField: {
			width: '100%'
		}
	});

interface IState {
	Asignaturas: ICurso[];
}

interface IProps extends WithStyles<typeof styles> {}
class Index extends Component<IProps, IState> {
	constructor(props) {
		super(props);
		this.getAsignaturas = this.getAsignaturas.bind(this);
		this.state = {
			Asignaturas: []
		};
	}

	componentDidMount() {
		this.getAsignaturas();
	}

	getAsignaturas() {
		fetch('/api/cursos/getallcursos')
			.then((data) => {
				return data.json() as Promise<ICurso[]>;
			})
			.then((cursos) => {
				var todosCursos = cursos.map<ICurso>((a) => {
					return {
						id: a.id,
						asignatura: a.asignatura,
						capacidadMax: a.capacidadMax,
						docente: a.docente
					};
				});
				this.setState({
					Asignaturas: todosCursos
				});
			});
	}

	render() {
		const { classes } = this.props;
		return (
			<PanelExpanded title='Asignaturas'>
				<TableCursos items={this.state.Asignaturas}></TableCursos>
			</PanelExpanded>
		);
	}
}

export default withStyles(styles)(Index);
