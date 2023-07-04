import Capslock from './components/CapsLock';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';

const React =  require('react');

export default function App(){
	return(
		<div>
			<h1 className="red">Moça</h1>
			<p>O profressor de <Capslock> filosofia </Capslock> da izadora pensa que a aula dura 1h e na vdd dura 2h</p>
			<ul>
				<li>férias 1</li>
				<li>férias 2</li>
				<li>férias 3</li>
			</ul>

			<Header />
			<MainContent />
			<Footer />

			<p className="blue">este é o sass</p>
		</div>
	)
}