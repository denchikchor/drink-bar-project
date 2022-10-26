import { Link } from 'react-router-dom';

function Coct(props) {
    const { strDrink, strDrinkThumb, idDrink } = props;

    return (
        <div>
            <Link
                to={`/coct/${idDrink}`}
                className="card"
                style={{ backgroundImage: `url(${strDrinkThumb})` }}
            >
                <div className="overlay">
                    <div className="header">
                        <div className="header-text">
                            <h3 className="title">{strDrink}</h3>
                        </div>
                    </div>
                    <div className="description">
                        <button>OPEN RECIPE</button>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export { Coct };
