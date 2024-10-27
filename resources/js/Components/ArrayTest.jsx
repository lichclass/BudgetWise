import { useState } from 'react';

const defaultItems = [
    {
        id: 1,
        name: 'Food & drinks',
        type: 'expense',
        isDefault: true,
    },
    {
        id: 2,
        name: 'Transportation',
        type: 'expense',
        isDefault: true,
    },
    {
        id: 3,
        name: 'Salary',
        type: 'income',
        isDefault: true,
    },
    {
        id: 4,
        name: 'Allowance',
        type: 'income',
        isDefault: true,
    },
];

function ArrayTest() {

    // Store the items
    const [items, setItems] = useState(defaultItems);

    // Store the selected items
    const [selected, setSelected] = useState([]);

    // Store the new item
    const [newItem, setNewItem] = useState('');

    // Store the new item type
    const [newType, setNewType] = useState('expense');

    // Store the new items
    const [newItems, setNewItems] = useState([]);

    // Store the new selected items
    const [newSelectedItems, setNewSelectedItems] = useState([]);

    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            setSelected((prev) => [...prev, value]);
            const newItem = newItems.find(item => item.category_id === value);
            if (newItem) {
                setNewSelectedItems((prev) => [...prev, newItem]);
            }
        } else {
            setSelected((prev) => prev.filter((item) => item !== value));
            setNewSelectedItems((prev) => prev.filter((item) => item.category_id !== value));
        }
    };

    const handleAddItem = () => {
        if (newItem.trim() !== '') {
            const newItemObject = {
                id: `new-${items.length + 1}`,
                name: newItem,
                type: newType,
                isDefault: false,
            };
            setItems((prev) => [...prev, newItemObject]);
            setNewItems((prev) => [...prev, newItemObject]);
            setNewItem('');
        }
    };

    const handleDeleteItem = (id) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
        setNewItems((prev) => prev.filter((item) => item.id !== id));
    }

    return (
        <div className='flex'>

            {/* Checkbox List */}
            <div id='item-list' className='border'>
                {items.map((item) => (
                    <div key={item.id}>
                        <input
                            type="checkbox"
                            value={item.id}
                            id={`category-${item.id}`}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor={`category-${item.id}`}>
                            {item.name} - {item.type}
                        </label><br />
                        {item.isDefault ? null : (
                            <button
                                className='btn'
                                onClick={() => handleDeleteItem(item.id)}
                            >
                                Delete
                            </button>
                        )}
                    </div>
                ))}
            </div>

            {/* Add New Item */}
            <div className='border'>
                <h3>Add New Item:</h3>
                <select
                    value={newType}
                    onChange={(e) => setNewType(e.target.value)}
                >
                    <option value='expense'>Expense</option>
                    <option value='income'>Income</option>
                </select><br />
                <input
                    type="text"
                    className='text-black'
                    value={newItem}
                    placeholder='Enter a new item'
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <br />
                <button className='btn' onClick={handleAddItem}>Add</button>
            </div>
            
            {/* Selected Values */}
            <div className='border'>
                <h3>Selected Values:</h3>
                <ul>
                    {selected.map((value) => (
                        <li key={value.toString()}>{String(value)}</li>
                    ))}
                </ul>
            </div>
            
            {/* New Items */}
            <div className='border'>
                <h3>New Items:</h3>
                <ul>
                    {newItems.map((item) => (
                        <li key={item.id.toString()}>{item.name} - {item.type}</li>
                    ))}
                </ul>
            </div>

            <div className='border'>
                <h3>New Selected Items:</h3>
                <ul>
                    {newSelectedItems.map((value) => (
                        <li key={value.id.toString()}>{value.name} - {value.type}</li>
                    ))}
                </ul>
            </div>

            <div className='border'>
                <h3>Console Logs:</h3>
                <button
                    className='btn'
                    onClick={() => {
                        console.log('Items:', items);
                        console.log('New Items:', newItems);
                        console.log('Selected Items:', selected);
                        console.log('New Selected Items:', newSelectedItems);
                    }}
                >
                    Log to Console
                </button>
            </div>
        </div>
    );
}

export default ArrayTest;