import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Consulting from "../components/Sections/Consulting";
import Programs from "../components/Sections/Programs";
import About from "../components/Sections/About";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";

export default function Landing() {
	return (
		<>
			<TopNavbar />
			<Header />
			<About />
			<Consulting />
			<Programs />
			<Contact />
			<Footer />
		</>
	);
}
