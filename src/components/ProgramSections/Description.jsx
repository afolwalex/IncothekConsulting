import React from "react";
import styled from "styled-components";
import AddImage2 from "../../assets/img/add/add2.png";

const Description = ({ desc }) => {
	return (
		<Wrapper id="about">
			<div className="whiteBg">
				<div className="container">
					<HeaderInfo>
						<p className="font15">{desc.about}</p>
					</HeaderInfo>
				</div>
				<div className="container">
					<HeaderInfo>
						<h1 className="font40 extraBold">For Whom</h1>
						<p className="font15">{desc.forWhom}</p>
					</HeaderInfo>
				</div>
				<div className="container moveBelow">
					<HeaderInfo>
						<h2 className="font40 extraBold">
							Workshop Objectives
						</h2>
						<p className="font15">{desc.objectives}</p>
					</HeaderInfo>
				</div>
				<div className="lightBg">
					<div className="container">
						<Advertising className="flexSpaceCenter">
							<AddLeft>
								<AddLeftInner>
									<ImgWrapper className="flexCenter">
										<img
											className="radius8"
											src={desc.img}
											alt="add"
										/>
									</ImgWrapper>
								</AddLeftInner>
							</AddLeft>
							<AddRight>
								<h4 className="font15 semiBold">
									The workshop contains the following:
								</h4>
								{desc.outline && desc.outline.length > 0 && (
									<ul className="font14">
										{desc.outline.map((d, i) => (
											<li key={i + 1}>{d}</li>
										))}
									</ul>
								)}
								<h4 className="font15 semiBold">
									Duration is {desc.duration} and it costs ₦
									{desc.price} per participant:
								</h4>
							</AddRight>
						</Advertising>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	width: 100%;
	padding-top: 100px;
	padding-bottom: 30px;
`;
const HeaderInfo = styled.div`
	margin-bottom: 30px;
	@media (max-width: 860px) {
		text-align: center;
	}
`;

const Advertising = styled.div`
	padding: 100px 0;
	margin: 100px 0;
	position: relative;
	@media (max-width: 1160px) {
		padding: 60px 0 40px 0;
	}
	@media (max-width: 860px) {
		flex-direction: column;
		padding: 0 0 30px 0;
		margin: 80px 0 0px 0;
	}
`;
const AddLeft = styled.div`
	position: relative;
	width: 50%;
	p {
		max-width: 475px;
	}
	@media (max-width: 860px) {
		width: 80%;
		order: 2;
		text-align: center;
		h2 {
			line-height: 3rem;
			margin: 15px 0;
		}
		p {
			margin: 0 auto;
		}
	}
`;
const AddRight = styled.div`
	width: 50%;
	@media (max-width: 860px) {
		width: 80%;
		order: 2;
	}
`;
const AddLeftInner = styled.div`
	width: 100%;
	position: absolute;
	top: -300px;
	left: 0;
	@media (max-width: 1190px) {
		top: -250px;
	}
	@media (max-width: 920px) {
		top: -200px;
	}
	@media (max-width: 860px) {
		order: 1;
		position: relative;
		top: -60px;
		left: 0;
	}
`;
const ImgWrapper = styled.div`
	width: 100%;
	padding: 0 15%;
	img {
		width: 100%;
		min-height: 400px;
	}
	@media (max-width: 400px) {
		padding: 0;
	}
`;

export default Description;
