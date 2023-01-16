import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

export default function ProjectBox({ img, title, text, to }) {
	const navigate = useNavigate();

	return (
		<Wrapper onClick={() => navigate(`/program/${to}`)}>
			<ImgBtn className="aniamte pointer">
				<img className="radius8" src={img} alt="project"></img>
			</ImgBtn>
			<h3 className="font20 extraBold focushover">{title}</h3>
			<p className="font13 focushover">{text}</p>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100%;
	margin-top: 30px;
	img {
		width: 100%;
		height: 300px;
		margin: 20px 0;
	}
	h3 {
		padding-bottom: 10px;
	}
	cursor: pointer;
`;
const ImgBtn = styled.button`
	background-color: transparent;
	border: 0px;
	outline: none;
	padding: 0px;
	margin: 0px;
	:hover > img {
		opacity: 0.5;
	}
`;
