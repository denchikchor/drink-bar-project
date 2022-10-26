import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Search.scss';

export default function Search({ searchDrink }) {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            navigate(`/searchDrink/${search}`);
        }
    };

    return (
        <div className="Search">
            <div className="space"></div>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Name of drink..."
                onKeyDown={handleKey}
            />
            <div className="space"></div>
            <Link
                to={`/searchDrink/${search}`}
                onClick={() => setSearch('')}
                style={{ pointerEvents: search ? '' : 'none' }}
            >
                Search
            </Link>
        </div>
    );
}
