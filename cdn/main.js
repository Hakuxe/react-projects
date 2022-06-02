function Navbar() {
	return (
		<nav>
         <h1>Logo</h1>
			<ul>
				<li>item 1</li>
				<li>item 2</li>
			</ul>
		</nav>
	);
}

function Content() {
	return (
		<p>
         tedxt
      </p>
	);
}


ReactDOM.render(
	<div>
      <Navbar />
      <Content />
   </div>,
	document.getElementById("root")
);
