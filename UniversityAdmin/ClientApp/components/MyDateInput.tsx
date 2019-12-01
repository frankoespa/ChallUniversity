import React from 'react';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardDateTimePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment';

moment.updateLocale('es', {
	weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']
});

const styles = (theme: Theme) =>
	createStyles({
		fecha: {
			width: '100%'
		}
	});

interface IProps extends WithStyles<typeof styles> {
	value: moment.Moment;
	valueOnChange: (date: moment.Moment, value?: string) => void;
	title: string;
}

function MyDateTimeInput(props: IProps): JSX.Element {
	const { classes, value, valueOnChange, title } = props;

	return (
		<MuiPickersUtilsProvider utils={MomentUtils} locale='es'>
			<KeyboardDatePicker
				placeholder='d/m/aaaa'
				className={classes.fecha}
				autoOk={false}
				invalidDateMessage='Formato inválido'
				inputVariant='outlined'
				disableToolbar
				variant='dialog'
				format='DD/MM/YYYY'
				margin='normal'
				id='date-picker-inline'
				label={title}
				value={value}
				onChange={valueOnChange}
				KeyboardButtonProps={{
					'aria-label': 'change date'
				}}
			/>
		</MuiPickersUtilsProvider>
	);
}

export default withStyles(styles)(MyDateTimeInput);
