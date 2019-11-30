import { Moment } from 'moment';

export interface IEstado {
	asignatura: string;
	docente: string;
	fechaInscripcion: Moment;
	estado: string;
}
