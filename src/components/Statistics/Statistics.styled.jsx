import styled from "styled-components";
import { getRandomHexColor } from '../../utils/getRandomHexColor';

export const StatisticSection = styled.section`
	display: flex;
	flex-direction: column;
	margin: 0 auto 40px;
	max-width: 100%;
	width: 300px;
	border-radius: 8px;
	box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
	background-color: #f7f2fa;
`;

export const StatisticTitle = styled.h2`
	padding: 16px;
	color: #5704a0;
	text-align: center;
	text-transform: uppercase;
	font-family: 'Roboto';
	font-size: 24px;
	font-weight: 700;
`;

export const StatisticList = styled.ul`
	width: 100%;
	display: flex;
	align-items: center;
`;

export const StatisticListItem = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex: 1 1 auto;
	padding: 8px;
	background-color: ${props => getRandomHexColor(props.index)};

	:first-child {
		border-bottom-left-radius: 8px;
	}
	:last-child {
		border-bottom-right-radius: 8px
	}
`;

export const Label = styled.span`
	font-size: 12px;
	color: #fff;
`;

export const Percentage = styled.span`
	font-size: 20px;
	font-weight: 700;
	color: #fff;
`;