import { Coct } from './Coct';

function CoctList({ drinks = [] }) {
    return (
        <div className="list">
            {drinks.map((el) => (
                <Coct key={el.idDrink} {...el} />
            ))}
        </div>
    );
}

export { CoctList };
