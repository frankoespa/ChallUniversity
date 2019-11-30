import { Moment } from 'moment';

export interface IAlumno {
	id?: number;
	nombre?: string;
	legajo?: number;
	edad?: number;
	fechaNacimiento?: Moment;
}
