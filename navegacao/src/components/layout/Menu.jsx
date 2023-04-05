import './Menu.css';
import { Link } from 'react-router-dom';

function Menu(props) {
	return (
		<nav className="menu">
			<ul>
				<li>
					<Link to="/">Íncio</Link>
				</li>
				<li>
					<Link to="/param/123">Param #01</Link>
				</li>
				<li>
					<Link to="/param/456">Param #02</Link>
				</li>
				<li>
					<Link to="/about">Sobre</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Menu;
