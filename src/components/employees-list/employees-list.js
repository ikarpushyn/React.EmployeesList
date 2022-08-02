import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data, onDelete, /* onToggleIncrease, onToggleRise */ onToggleProp }) => {
	const elements = data.map((item) => {
		const { id, ...itemProps } = item;

		return (
			<EmployeesListItem
				key={id}
				/* name={item.name} salary={item.salary} */
				{...itemProps}
				onDelete={() => onDelete(id)}
				// onToggleIncrease={() => onToggleIncrease(id)}
				// onToggleRise={() => onToggleRise(id)}
				onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
			/>
		);
	});

	const localStorageArray = JSON.stringify(data);
	localStorage.setItem('data', localStorageArray);

	return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
