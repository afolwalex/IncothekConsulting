import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import HeaderImage from "../../assets/img/bg-1.jpg";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import { Link } from "react-scroll";

export default function Header() {
	return (
		<Wrapper id="home" className="container flexSpaceCenter">
			<LeftSide className="flexCenter">
				<div>
					<h1 className="extraBold font60">Making life easier</h1>
					<HeaderP className="font15 semiBold">
						We ensure that business objectives are not hampered by
						technology or ignorance. We work with clients and
						experts to deploy cost effective processes which empower
						staff and optimize their interaction with technology to
						attain corporate and customer goals.
					</HeaderP>
					<BtnWrapper>
						<LinkStyle
							className="pointer flexNullCenter"
							to="programs"
							smooth={true}
						>
							View Programs
						</LinkStyle>
					</BtnWrapper>
				</div>
			</LeftSide>
			<RightSide>
				<ImageWrapper>
					<Img
						className="radius8"
						src={HeaderImage}
						alt="office"
						style={{ zIndex: 9 }}
					/>
					<DotsWrapper>
						<Dots />
					</DotsWrapper>
				</ImageWrapper>
				<GreyDiv className="lightBg"></GreyDiv>
			</RightSide>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	padding-top: 80px;
	width: 100%;
	min-height: 840px;
	@media (max-width: 960px) {
		flex-direction: column;
	}
`;
const LeftSide = styled.div`
	width: 50%;
	height: 100%;
	@media (max-width: 960px) {
		width: 100%;
		order: 2;
		margin: 50px 0;
		text-align: center;
	}
	@media (max-width: 560px) {
		margin: 80px 0 50px 0;
	}
`;
const RightSide = styled.div`
	width: 50%;
	height: 100%;
	@media (max-width: 960px) {
		width: 100%;
		order: 1;
		margin-top: 30px;
	}
`;
const HeaderP = styled.div`
	max-width: 470px;
	padding: 15px 0 50px 0;
	line-height: 1.5rem;
	@media (max-width: 960px) {
		padding: 15px 0 50px 0;
		text-align: center;
		max-width: 100%;
	}
`;
const BtnWrapper = styled.div`
	max-width: 190px;
	@media (max-width: 960px) {
		margin: 0 auto;
	}
`;
const GreyDiv = styled.div`
	width: 30%;
	height: 700px;
	position: absolute;
	top: 0;
	right: 0;
	z-index: 0;
	@media (max-width: 960px) {
		display: none;
	}
`;
const ImageWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	position: relative;
	z-index: 9;
	@media (max-width: 960px) {
		width: 100%;
		justify-content: center;
	}
`;
const Img = styled.img`
	width: 500px;
	height: 100%;
	@media (max-width: 560px) {
		width: 80%;
		height: auto;
	}
`;
const LinkStyle = styled(Link)`
	border: 1px solid #a91d1f;
	background-color: #a91d1f;
	width: 100%;
	text-align: center;
	align-items: center;
	justify-content: center;
	padding: 10px 15px;
	outline: none;
	color: #fff;
	border-radius: 20px;
	:hover {
		background-color: ${(props) =>
			props.border ? "transparent" : "#a91d1f"};
		border: 1px solid #a91d1f;
		color: ${(props) => (props.border ? "#a91d1f" : "#fff")};
	}
`;

const DotsWrapper = styled.div`
	position: absolute;
	right: -100px;
	bottom: 100px;
	z-index: 2;
	@media (max-width: 960px) {
		right: 100px;
	}
	@media (max-width: 560px) {
		display: none;
	}
`;
