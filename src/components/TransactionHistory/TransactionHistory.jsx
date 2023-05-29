import React from 'react';
import PropTypes from 'prop-types';
import { Table, Thead, Tr, TrExtend, Th, Tbody, TdType, Td } from './Transactionhistiry.styled';

export const TransactionHistory = ({ items }) => {
	return (
		<Table>
			<Thead>
				<Tr>
					<Th>Type</Th>
					<Th>Amount</Th>
					<Th>Currency</Th>
				</Tr>
			</Thead>

			<Tbody>
				{items.map((item, idx) => {
					return (
						<TableRow
							key={item.id}
							id={item.id}
							type={item.type}
							currency={item.currency}
							amount={item.amount}
							index={idx}
						/>
					);
				})}
			</Tbody>
		</Table>
	);
};

const TableRow = ({ type, amount, currency, index }) => {
	return (
		<TrExtend idx={index}>
			<TdType>{type}</TdType>
			<Td>{amount}</Td>
			<Td>{currency}</Td>
		</TrExtend>
	);
};

TransactionHistory.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			amount: PropTypes.string.isRequired,
			currency: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
};

TableRow.propTypes = {
	index: PropTypes.number.isRequired,
	type: PropTypes.string.isRequired,
	amount: PropTypes.string.isRequired,
	currency: PropTypes.string.isRequired,
};