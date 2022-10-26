import { Link } from 'react-router-dom';
import './CategoryList.scss';
import coctails from '../../img/coctails.jpg';
import Ordinary_Drink from '../../img/Ordinary_Drink.jpg';
import Shake from '../../img/Shake.jpg';
import Cocoa from '../../img/Cocoa.jpg';
import Shot from '../../img/Shot.jpg';
import Homemade_Liqueur from '../../img/Homemade_Liqueur.jpg';
import Beer from '../../img/Beer.jpg';
import Coffee__Tea from '../../img/Coffee__Tea.jpg';
import Soft_Drink from '../../img/Soft_Drink.jpg';

function CategoryList() {
    return (
        <div className="list">
            <Link
                to={'category/Cocktail'}
                className="card"
                style={{ backgroundImage: `url(${coctails})` }}
            >
                <div className="overlay">
                    <div className="header">
                        <div className="header-text">
                            <h3 className="title">Cocktail</h3>
                        </div>
                    </div>
                    <div className="description">
                        <button>OPEN ME</button>
                    </div>
                </div>
            </Link>

            <Link
                to={'category/Ordinary_Drink'}
                className="card"
                style={{ backgroundImage: `url(${Ordinary_Drink})` }}
            >
                <div className="overlay">
                    <div className="header">
                        <div className="header-text">
                            <h3 className="title">Ordinary Drink</h3>
                        </div>
                    </div>
                    <div className="description">
                        <button>OPEN ME</button>
                    </div>
                </div>
            </Link>
            <Link
                to={'category/Shake'}
                className="card"
                style={{ backgroundImage: `url(${Shake})` }}
            >
                <div className="overlay">
                    <div className="header">
                        <div className="header-text">
                            <h3 className="title">Shake</h3>
                        </div>
                    </div>
                    <div className="description">
                        <button>OPEN ME</button>
                    </div>
                </div>{' '}
            </Link>
            <Link
                to={'category/Cocoa'}
                className="card"
                style={{ backgroundImage: `url(${Cocoa})` }}
            >
                <div className="overlay">
                    <div className="header">
                        <div className="header-text">
                            <h3 className="title">Cocoa</h3>
                        </div>
                    </div>
                    <div className="description">
                        <button>OPEN ME</button>
                    </div>
                </div>{' '}
            </Link>
            <Link
                to={'category/Shot'}
                className="card"
                style={{ backgroundImage: `url(${Shot})` }}
            >
                <div className="overlay">
                    <div className="header">
                        <div className="header-text">
                            <h3 className="title">Shot</h3>
                        </div>
                    </div>
                    <div className="description">
                        <button>OPEN ME</button>
                    </div>
                </div>{' '}
            </Link>
            <Link
                to={'category/Homemade_Liqueur'}
                className="card"
                style={{ backgroundImage: `url(${Homemade_Liqueur})` }}
            >
                <div className="overlay">
                    <div className="header">
                        <div className="header-text">
                            <h3 className="title">Homemade Liqueur</h3>
                        </div>
                    </div>
                    <div className="description">
                        <button>OPEN ME</button>
                    </div>
                </div>{' '}
            </Link>
            <Link
                to={'category/Beer'}
                className="card"
                style={{ backgroundImage: `url(${Beer})` }}
            >
                <div className="overlay">
                    <div className="header">
                        <div className="header-text">
                            <h3 className="title">Beer</h3>
                        </div>
                    </div>
                    <div className="description">
                        <button>OPEN ME</button>
                    </div>
                </div>{' '}
            </Link>
            <Link
                to={'category/Soft_Drink'}
                className="card"
                style={{ backgroundImage: `url(${Soft_Drink})` }}
            >
                <div className="overlay">
                    <div className="header">
                        <div className="header-text">
                            <h3 className="title">Soft Drink</h3>
                        </div>
                    </div>
                    <div className="description">
                        <button>OPEN ME</button>
                    </div>
                </div>{' '}
            </Link>
            <Link
                to={'category/Coffee__Tea'}
                className="card"
                style={{ backgroundImage: `url(${Coffee__Tea})` }}
            >
                <div className="overlay">
                    <div className="header">
                        <div className="header-text">
                            <h3 className="title">Coffee & Tea</h3>
                        </div>
                    </div>
                    <div className="description">
                        <button>OPEN ME</button>
                    </div>
                </div>{' '}
            </Link>
        </div>
    );
}

export { CategoryList };
