import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/sections/Header/Header';
import Footer from './components/sections/Footer/Footer';
import { Home } from './components/views/Home/Home';
import { Stories } from './components/views/Stories/Stories';
import { Features } from './components/views/Features/Features';
import { Pricing } from './components/views/Pricing/Pricing';
import NotFound from './components/views/NotFound/NotFound';
import ScrollTop from './components/ScrollTop/ScrollTop';

function App() {

	return (
		<BrowserRouter>
			<Header />

			<main>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/stories' element={<Stories />}></Route>
					<Route path='/features' element={<Features />}></Route>
					<Route path='/pricing' element={<Pricing />}></Route>
					<Route path='/*' element={<NotFound />}></Route>
				</Routes>
			</main>

			<ScrollTop />
			<Footer />
		</BrowserRouter>
	)
}

export default App
