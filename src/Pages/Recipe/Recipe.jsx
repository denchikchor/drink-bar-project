import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDrinkById } from '../../api';
import './Recipe.scss';

function Recipe() {
    const [recipe, setRecipe] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getDrinkById(id).then((data) => setRecipe(data.drinks[0]));
    }, [id]);

    return (
        <>
            <div className="recipe">
                <div className="left-side">
                    <img src={recipe.strDrinkThumb} alt={recipe.strMeal} />
                </div>
                <div className="right-side">
                    <h1>{recipe.strDrink}</h1>
                    <h6>
                        <span>Category:</span> {recipe.strCategory}
                    </h6>
                    {recipe.strArea ? (
                        <h6>
                            <span>Alcoholic:</span> {recipe.strAlcoholic}
                        </h6>
                    ) : null}
                    <p>Instruction: {recipe.strInstructions}</p>

                    <table className="centered">
                        <thead>
                            <tr>
                                <th>Ingridient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(recipe).map((key) => {
                                if (key.includes('Ingredient') && recipe[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{recipe[key]}</td>
                                            <td>
                                                {
                                                    recipe[
                                                        `strMeasure${key.slice(
                                                            13
                                                        )}`
                                                    ]
                                                }
                                            </td>
                                        </tr>
                                    );
                                }
                                return null;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export { Recipe };
