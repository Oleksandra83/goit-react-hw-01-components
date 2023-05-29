import styled from "styled-components";

export const Table = styled.table`
	margin: 0 auto 40px;
	width: 60%;
	text-align: center;
	border: 1px solid #E0FFFF;
	border-radius: 2px;
	border-collapse: collapse;
	box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Thead = styled.thead`
	background-color: #48D1CC;
	color: #5704a0;
	font-family: 'Roboto';
	font-size: 16px;
	text-transform: uppercase;
`;

export const Tr = styled.tr`
	color: #fff;
	background-color: rgb(0,191,255);
`;

export const TrExtend = styled(Tr)`
	color: rgb(110, 109, 109);
	background-color: ${props => props.idx % 2 === 0 ? 'transparent' : 'rgb(240, 245, 246)'};
`;

export const Th = styled.th`
	padding: 10px 0;
	border: 1px solid #E0FFFF;
`;

export const Tbody = styled.tbody`
	background-color: #fff;
`;

export const Td = styled.td`
	padding: 10px;
	border: 1px solid rgb(218, 232, 234);
`;

export const TdType = styled(Td)`
	text-transform: capitalize;
`;

