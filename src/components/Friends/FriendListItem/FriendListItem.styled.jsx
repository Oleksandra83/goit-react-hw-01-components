import styled from "styled-components";

export const FriendItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 20px;
	padding: 8px;
	max-width: 100%;
	width: 300px;
	border-radius: 8px;
	box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
	background-color: #f7f2fa;
`;

export const Status = styled.span`
	display: block;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${props => {
		return props.isOnline ? 'green' : 'red';
	}};
`;

export const Photo = styled.img`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 60px;
	width: 60px;
	border-radius: 2px;
`;

export const Name = styled.p`
	color: #5704a0;
	font-size: 18px;
	font-weight: 700;
`;