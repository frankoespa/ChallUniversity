import React from 'react';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Red from '@material-ui/core/colors/red';
import MyDateInput from '../components/MyDateInput';
import moment, { Moment } from 'moment';
import { IAlumno } from '../src/classes/IAlumno';
import { useRouter } from 'next/router';
import PanelExpanded from '../components/PanelExpanded';

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

function edicionalumno(props: IProps): JSX.Element {
	const { classes } = props;
	let router = useRouter();
	let { id } = router.query;
	let [idA, setIdA] = React.useState<number>(null);
	let [nombre, setNombre] = React.useState<string>('');
	let [apellido, setApellido] = React.useState<string>('');
	let [legajo, setLegajo] = React.useState<number>(null);
	let [edad, setEdad] = React.useState<number>(null);
	let [fechaNacimiento, setFechaNacimiento] = React.useState<Moment>(null);

	function nombreChange(e: React.ChangeEvent<HTMLInputElement>) {
		var valor = e.target.value;
		var ulPos = valor.length - 1;
		if (/[A-Za-z]/g.test(valor[ulPos])) {
			setNombre(valor);
		}
	}
	function apellidoChange(e: React.ChangeEvent<HTMLInputElement>) {
		var valor = e.target.value;
		var ulPos = valor.length - 1;
		if (/[A-Za-z]/g.test(valor[ulPos])) {
			setApellido(valor);
		}
	}
	function legajoChange(e: React.ChangeEvent<HTMLInputElement>) {
		var valor = e.target.value;
		if (valor == '') {
			setLegajo(null);
			return;
		}
		var ulPos = valor.length - 1;
		if (/[0-9]/g.test(valor[ulPos])) {
			setLegajo(parseInt(valor));
		}
	}
	function edadChange(e: React.ChangeEvent<HTMLInputElement>) {
		var valor = e.target.value;
		if (valor == '') {
			setEdad(null);
			return;
		}
		var ulPos = valor.length - 1;
		if (/[0-9]/g.test(valor[ulPos])) {
			setEdad(parseInt(valor));
		}
	}
	function fechaNacimientoChange(date: moment.Moment, value: string) {
		setFechaNacimiento(date);
	}

	function saveAlumno() {
		if (nombre.length != 0 && apellido.length != 0 && legajo != null && edad != null && fechaNacimiento != null) {
			fetch('/api/alumnos', {
				method: 'PUT',
				body: JSON.stringify({
					id: idA,
					nombre: `${nombre} ${apellido}`,
					legajo,
					edad,
					fechaNacimiento
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			}).then(() => {
				router.push('/');
			});
		}
	}

	function setearAlumnoEdit(alumnoEdit: IAlumno) {
		setIdA(alumnoEdit.id);
		setNombre(alumnoEdit.nombre.split(' ')[0]);
		setApellido(alumnoEdit.nombre.split(' ')[1]);
		setLegajo(alumnoEdit.legajo);
		setEdad(alumnoEdit.edad);
		setFechaNacimiento(moment(alumnoEdit.fechaNacimiento));
	}

	React.useEffect(() => {
		fetch(`api/alumnos/${id}`)
			.then((data) => {
				return data.json() as Promise<IAlumno>;
			})
			.then((alumno) => {
				setearAlumnoEdit(alumno);
			});
	}, []);

	return (
		<PanelExpanded title='Editar Alumno'>
			<TextField
				onChange={nombreChange}
				value={nombre}
				id='nombre'
				label='Nombre'
				className={`${classes.textField}`}
				margin='normal'
				variant='outlined'
				required
				placeholder={'Franco'}
			/>
			<TextField
				onChange={apellidoChange}
				value={apellido}
				id='apellido'
				label='Apellido'
				className={`${classes.textField}`}
				margin='normal'
				variant='outlined'
				required
				placeholder={'Esparza'}
			/>
			<TextField
				id='legajo'
				onChange={legajoChange}
				value={legajo ? legajo : ''}
				label='Legajo'
				className={`${classes.textField}`}
				margin='normal'
				variant='outlined'
				required
				placeholder={'45343'}
			/>
			<TextField
				id='edad'
				onChange={edadChange}
				value={edad ? edad : ''}
				label='Edad'
				className={`${classes.textField}`}
				margin='normal'
				variant='outlined'
				required
				placeholder={'26'}
			/>
			<MyDateInput title='Fecha Nacimiento' value={fechaNacimiento} valueOnChange={fechaNacimientoChange}></MyDateInput>

			<Button
				variant='outlined'
				color='primary'
				onClick={() => {
					router.push('/');
				}}
				className={classes.buttonCancel}>
				Cancelar
			</Button>
			<Button
				variant='outlined'
				color='primary'
				onClick={() => {
					saveAlumno();
				}}>
				Aceptar
			</Button>
		</PanelExpanded>
	);
}

export default withStyles(styles)(edicionalumno);
