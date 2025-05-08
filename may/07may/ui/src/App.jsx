import React, { useEffect, useState } from 'react';

function App() {
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({ name: '', email: '' });
    const [editId, setEditId] = useState(null);

    const fetchUsers = async () => {
        const res = await fetch('http://localhost:5000/users');
        const data = await res.json();
        setUsers(data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = editId ? 'PUT' : 'POST';
        const url = editId 
            ? `http://localhost:5000/users/${editId}` 
            : `http://localhost:5000/users`;

        await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });

        setForm({ name: '', email: '' });
        setEditId(null);
        fetchUsers();
    };

    const handleEdit = (user) => {
        setForm({ name: user.name, email: user.email });
        setEditId(user._id);
    };

    const handleDelete = async (id) => {
        await fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        });
        fetchUsers();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                />
                <input
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                />
                <button type="submit">{editId ? "Update" : "Add"}</button>
            </form>

            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        {user.name} - {user.email}
                        <button onClick={() => handleEdit(user)}>Edit</button>
                        <button onClick={() => handleDelete(user._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
