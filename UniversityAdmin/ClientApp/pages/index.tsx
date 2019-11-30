import React, { Component } from 'react';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import PanelExpanded from '../components/PanelExpanded';
import TableAlumnos from '../components/TableAlumnos';
import { IAlumno } from '../src/classes/IAlumno';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = (theme: Theme) =>
	createStyles({
		textField: {
			width: '100%'
		}
	});

interface IState {
	Alumnos: IAlumno[];
	carga: boolean;
}

interface IProps extends WithStyles<typeof styles> {}
class Index extends Component<IProps, IState> {
	constructor(props) {
		super(props);
		this.getAlumnos = this.getAlumnos.bind(this);
		this.state = {
			Alumnos: [],
			carga: false
		};
	}

	componentDidMount() {
		this.getAlumnos();
	}

	getAlumnos() {
		fetch('/api/alumnos')
			.then((data) => {
				return data.json() as Promise<IAlumno[]>;
			})
			.then((alumnos) => {
				var todosAlumnos = alumnos.map<IAlumno>((a) => {
					return {
						id: a.id,
						nombre: a.nombre,
						legajo: a.legajo,
						edad: a.edad,
						fechaNacimiento: moment(a.fechaNacimiento)
					};
				});
				this.setState({
					Alumnos: todosAlumnos,
					carga: true
				});
			});
	}

	render() {
		const { classes } = this.props;
		return (
			<PanelExpanded title='Alumnos'>
				<TableAlumnos items={this.state.Alumnos} getAlumnos={this.getAlumnos}></TableAlumnos>
				{this.state.carga && this.state.Alumnos.length == 0 ? <p>No hay Alumnos cargados</p> : null}
				{this.state.carga ? null : (
					<div style={{ padding: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<CircularProgress />
					</div>
				)}
			</PanelExpanded>
		);
	}
}

export default withStyles(styles)(Index);
