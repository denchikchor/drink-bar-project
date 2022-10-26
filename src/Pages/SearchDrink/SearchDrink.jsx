import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDrinkByName } from '../../api';
import { CoctList } from '../../Components/CoctList';
import './SearchDrink.scss';

export default function SearchDrink() {
    const { name } = useParams();
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        getDrinkByName(name).then((data) => {
            setDrinks(data.drinks);
        });
    }, [name]);

    return (
        <>
            {!drinks ? (
                <h3>Nothing found with "{name}"</h3>
            ) : (
                <>
                    {' '}
                    <h3>Result of searcing "{name}"</h3>
                    <CoctList drinks={drinks} />
                </>
            )}
        </>
    );
}
