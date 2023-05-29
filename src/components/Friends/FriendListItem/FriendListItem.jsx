import React from "react";
import PropTypes from 'prop-types';
import { FriendItem, Status, Photo, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
	return (
		<FriendItem>
			<Status isOnline={isOnline}></Status>
			<Photo src={avatar} alt="User avatar" width="48" />
			<Name>{ name }</Name>
		</FriendItem>
	)
}

FriendListItem.propTypes = {
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	isOnline: PropTypes.bool.isRequired,
}