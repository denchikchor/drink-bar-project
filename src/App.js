import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import Category from './Pages/Category';
import { Recipe } from './Pages/Recipe/Recipe';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { NotFound } from './Pages/NotFound';
import SearchDrink from './Pages/SearchDrink/SearchDrink';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <main className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:name" element={<Category />} />
                    <Route path="/coct/:id" element={<Recipe />} />
                    <Route path="*" element={<NotFound />} />
                    <Route
                        path="/searchDrink/:name"
                        element={<SearchDrink />}
                    />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
