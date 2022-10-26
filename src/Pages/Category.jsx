import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { filterByCategory } from '../api';
import { CoctList } from '../Components/CoctList';

export default function Category() {
    const { name } = useParams();
    const [drinks, setdrinks] = useState([]);

    useEffect(() => {
        let newName = '';
        if (name === 'Coffee__Tea') {
            newName = 'Coffee_/_Tea';
        } else {
            newName = name;
        }

        filterByCategory(newName).then((data) => {
            setdrinks(data.drinks);
        });
    }, [name]);

    return (
        <>
            <div>
                <CoctList drinks={drinks} />
            </div>
        </>
    );
}
