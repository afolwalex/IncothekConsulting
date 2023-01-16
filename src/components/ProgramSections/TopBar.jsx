import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import LogoIcon from "../../assets/img/logo.png";

const TopBar = ({ title }) => {
	const [y, setY] = useState(window.scrollY);

	useEffect(() => {
		window.addEventListener("scroll", () => setY(window.scrollY));
		return () => {
			window.removeEventListener("scroll", () => setY(window.scrollY));
		};
	}, [y]);

	return (
		<Wrapper
			className="flexCenter animate whiteBg"
			style={y > 100 ? { height: "60px" } : { height: "80px" }}
		>
			<NavInner className="container flexSpaceCenter">
				<Link className="pointer flexNullCenter" to="/">
					<img src={LogoIcon} height={40} />
				</Link>
				<div>
					<p
						className="extraBold"
						style={{ textTransform: "uppercase" }}
					>
						{title}
					</p>
				</div>
			</NavInner>
		</Wrapper>
	);
};

const Wrapper = styled.nav`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
`;
const NavInner = styled.div`
	position: relative;
	height: 100%;
`;

export default TopBar;
