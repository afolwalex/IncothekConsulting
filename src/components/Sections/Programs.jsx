import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
// Assets
import ProjectImg1 from "../../assets/img/teach-1.png";
import ProjectImg2 from "../../assets/img/teach-2.jpg";
import ProjectImg3 from "../../assets/img/teach-3.png";
import ProjectImg4 from "../../assets/img/teach-4.png";
import ProjectImg5 from "../../assets/img/teach-5.jpg";
import ProjectImg6 from "../../assets/img/teach-6.jpg";

export default function Programs() {
	return (
		<Wrapper id="programs">
			<div className="whiteBg">
				<div className="container">
					<HeaderInfo>
						<h1 className="font40 extraBold">
							Our Training Programs
						</h1>
						<p className="font15">
							Our training programmes are practical oriented and
							designed to give clients high returns on training
							expenses quickly by empowering staff to fix real
							business challenges. Majority of our training
							programmes are customized to meet specifically
							identified needs of clients, especially as part
							process re-engineering or other improvement
							initiatives. We also offer training that is
							developed to fill knowledge gaps identified in the
							market place. Such training programmes include the
							following:
						</p>
					</HeaderInfo>
					<div className="row textCenter">
						<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
							<ProjectBox
								img={ProjectImg1}
								title="GETTING IT RIGHT THE FIRST TIME"
								text="MISTAKE PROOFING FOR EXCELLENCE"
								to="program-1"
							/>
						</div>
						<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
							<ProjectBox
								img={ProjectImg2}
								title="QUALITY BY DESIGN"
								text="GETTING FINANCIAL SERVICES PRODUCTS RIGHT THE FIRST TIME"
								to="program-2"
							/>
						</div>
						<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
							<ProjectBox
								img={ProjectImg3}
								title="CORRECTIVE ACTION PLUS"
								text="DERIVING MAXIMUM BENEFITS FROM BUSINESS CHALLENGES"
								to="program-3"
							/>
						</div>
					</div>
					<div className="row textCenter">
						<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
							<ProjectBox
								img={ProjectImg4}
								title="MANAGING CHANGE"
								text="Creating and managing successful individual change events"
								to="program-4"
							/>
						</div>
						<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
							<ProjectBox
								img={ProjectImg5}
								title="MANAGING PERFORMANCE"
								text="Clearly convert corporate goals to team and individual goals"
								to="program-5"
							/>
						</div>
						<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
							<ProjectBox
								img={ProjectImg6}
								title="UNDERSTANDING BUSINESS PROCESSES"
								text="Equip participants with the tools."
								to="program-6"
							/>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	width: 100%;
	padding-bottom: 40px;
`;
const HeaderInfo = styled.div`
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
const ButtonsRow = styled.div`
	@media (max-width: 860px) {
		justify-content: space-between;
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
		height: auto;
	}
	@media (max-width: 400px) {
		padding: 0;
	}
`;
