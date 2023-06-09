import About from '../../views/examples/About';
import Home from '../../views/examples/Home';
import Param from '../../views/examples/Param';
import NotFound from '../../views/examples/NotFound';
import './Content.css';
import { Routes, Route } from "react-router-dom";

function Content(props) {
	return (
		<main className="content">
			<Routes>
        <Route path="/about" element={<About />} />
        <Route path="/param/:id" element={<Param />} />
        <Route path="/" exact element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
		</main>
	);
}

export default Content;
