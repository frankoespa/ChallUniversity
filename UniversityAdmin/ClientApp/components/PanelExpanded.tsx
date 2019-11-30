import React from 'react';
import { Theme, createStyles, makeStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = (theme: Theme) =>
	createStyles({
		heading: {
			fontWeight: theme.typography.fontWeightMedium,
			width: '100%'
		},
		contentDialog: {
			display: 'block'
		},
		root: {
			marginBottom: theme.spacing(2)
		}
	});

interface IProps extends WithStyles<typeof styles> {
	children?: JSX.Element[] | JSX.Element;
	title: string;
}

function PanelExpanded(props: IProps): JSX.Element {
	const { classes, children, title } = props;

	return (
		<ExpansionPanel defaultExpanded={true} className={classes.root}>
			<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
				<Typography align='center' className={classes.heading}>
					{title}
				</Typography>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails className={classes.contentDialog}>{children}</ExpansionPanelDetails>
		</ExpansionPanel>
	);
}

export default withStyles(styles)(PanelExpanded);
