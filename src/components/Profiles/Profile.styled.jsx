import styled from "styled-components";

export const Card = styled.div`
	display:flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10px;
	margin: 0 auto 40px;
	padding: 16px;
	max-width: 100%;
	width: 300px;
	border-radius: 8px;
	box-shadow: -1px -1px 1px #fff, 1px 1px 1px #d0ccd0;
	background-color: #f6ebfc;
`;

export const Description = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10px;
	margin-bottom: 16px;
`;

export const Avatar = styled.img`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
`;

export const Info = styled.p`
	color: #5704a0;
	font-family: 'Roboto';
	font-size: 16px;
`;

export const Name = styled(Info)`
	font-size: 24px;
	font-weight: 700;
`;

export const Tag = styled(Info)`
	color: rgb(62, 61, 61);
`;

export const Location = styled(Info)`
	color: rgb(52, 19, 92);
`;

export const StatsList = styled.ul`
	display: flex;
	gap: 10px;
	justify-content: center;
	align-items: center;
	padding: 16px;
	width: 100%;
	/* background-color: rgb(218, 213, 213);
	border-top: 1px solid #c1bebe; */
`;

export const StatsItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
:not(:last-child) {
	border-right: 1px solid rgb(62, 61, 61);
}
`;

export const StatsInfo = styled.span`
	margin: 0 5px;
	color: rgb(62, 61, 61);
	font-size: 16px;
`;

export const Label = styled(StatsInfo)`
	font-weight: 400;
`;

export const Quantity = styled(StatsInfo)`
	color: rgb(52, 19, 92);
	font-weight: 700;
`;