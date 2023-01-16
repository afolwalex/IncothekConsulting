import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import LogoIcon from "../../assets/img/logo.png";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
	return (
		<Wrapper className="animate whiteBg" sidebarOpen={sidebarOpen}>
			<SidebarHeader className="flexSpaceCenter">
				<div className="flexNullCenter">
					<img src={LogoIcon} height={35} />
				</div>
				<CloseBtn
					onClick={() => toggleSidebar(!sidebarOpen)}
					className="animate pointer"
				>
					<CloseIcon />
				</CloseBtn>
			</SidebarHeader>

			<UlStyle className="flexNullCenter flexColumn">
				<li className="semiBold font15 pointer">
					<Link
						onClick={() => toggleSidebar(!sidebarOpen)}
						activeClass="active"
						className="darkColor"
						style={{ padding: "10px 15px" }}
						to="home"
						spy={true}
						smooth={true}
						offset={-60}
					>
						Home
					</Link>
				</li>
				<li className="semiBold font15 pointer">
					<Link
						onClick={() => toggleSidebar(!sidebarOpen)}
						activeClass="active"
						className="darkColor"
						style={{ padding: "10px 15px" }}
						to="about"
						spy={true}
						smooth={true}
						offset={-60}
					>
						About
					</Link>
				</li>
				<li className="semiBold font15 pointer">
					<Link
						onClick={() => toggleSidebar(!sidebarOpen)}
						activeClass="active"
						className="darkColor"
						style={{ padding: "10px 15px" }}
						to="consulting"
						spy={true}
						smooth={true}
						offset={-60}
					>
						Consulting Practices
					</Link>
				</li>
				<li className="semiBold font15 pointer">
					<Link
						onClick={() => toggleSidebar(!sidebarOpen)}
						activeClass="active"
						className="darkColor"
						style={{ padding: "10px 15px" }}
						to="programs"
						spy={true}
						smooth={true}
						offset={-60}
					>
						Programs
					</Link>
				</li>
				<li className="semiBold font15 pointer">
					<Link
						onClick={() => toggleSidebar(!sidebarOpen)}
						activeClass="active"
						className="darkColor"
						style={{ padding: "10px 15px" }}
						to="contact"
						spy={true}
						smooth={true}
						offset={-60}
					>
						Contact
					</Link>
				</li>
			</UlStyle>
			{/* <UlStyle className="flexSpaceCenter">
				<li className="semiBold font15 pointer">
					<a
						href="/"
						style={{ padding: "10px 30px 10px 0" }}
						className="darkColor"
					>
						Sign Up
					</a>
				</li>
				
			</UlStyle> */}
		</Wrapper>
	);
}

const Wrapper = styled.nav`
	width: 400px;
	height: 100vh;
	position: fixed;
	top: 0;
	padding: 0 30px;
	right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
	z-index: 9999;
	@media (max-width: 400px) {
		width: 100%;
	}
`;
const SidebarHeader = styled.div`
	padding: 20px 0;
`;
const CloseBtn = styled.button`
	border: 0px;
	outline: none;
	background-color: transparent;
	padding: 10px;
`;
const UlStyle = styled.ul`
	padding: 40px;
	li {
		margin: 20px 0;
	}
`;
