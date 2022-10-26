import './Banner.scss';
import Search from '../Search/Search';

function Banner() {
    return (
        <div className="Banner">
            <div className="container">
                <div className="line"></div>
                <h6>Discover the new way to</h6>
                <h1>LOVE DRINKS</h1>
                <div className="line"></div>
                <Search />
            </div>
        </div>
    );
}

export { Banner };
