import styled from "styled-components";

export const Card = styled.div`
	display:flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10px;
	padding: 16px 0 0;
	margin: 40px auto;
	max-width: 100%;
	width: 300px;
	border-radius: 8px;
	box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
	background-color: #f7f2fa;
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
	justify-content: center;
	align-items: center;
	width: 100%;
	background-color: rgb(218, 213, 213);
	border-top: 1px solid #c1bebe;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
`;

export const StatsItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	padding:20px;

	:not(:last-child) {
	border-right: 1px solid #c1bebe;
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