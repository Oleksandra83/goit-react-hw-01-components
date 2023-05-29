import React from "react";
import PropTypes from 'prop-types';
import { StatisticSection, StatisticTitle, StatisticList, StatisticListItem, Label, Percentage } from './Statistics.styled'

export const Statistics = ({ stats, title }) => {
	return (
		<StatisticSection>
			{title && <StatisticTitle>{title}</StatisticTitle>}
			<StatisticList>
				{stats.map((item, idx) => (
					<StatisticListItem key={item.id} id={item.id} index={idx}>
					<Label>{item.label}</Label>
					<Percentage>{item.percentage}%</Percentage>
				</StatisticListItem>
				))}
			</StatisticList>
		</StatisticSection>
	)
}

Statistics.propTypes = {
	title: PropTypes.string,
	stats: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		percentage: PropTypes.number.isRequired,
	}).isRequired).isRequired
}