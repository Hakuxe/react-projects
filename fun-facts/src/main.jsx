import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Header from "./components/Header";


import "./index.css";

const Page = () => (
	<>
		<Header />
    
		<Footer />
	</>
);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Page />
	</React.StrictMode>
);
