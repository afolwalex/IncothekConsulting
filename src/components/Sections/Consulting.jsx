import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/bg-2.jpg";
import AddImage2 from "../../assets/img/bg-3.jpg";
import AddImage3 from "../../assets/img/bg-3.jpg";
import AddImage4 from "../../assets/img/bg-2.jpg";
import { Link } from "react-scroll";

export default function Consulting() {
	return (
		<Wrapper id="consulting">
			<div className="whiteBg" style={{ padding: "60px 0" }}>
				<div className="container">
					<HeaderInfo>
						<h1 className="font40 extraBold">
							Our Consulting Practice
						</h1>
						<p className="font15">
							It has been set up to deliver maximum advantage to
							our clients by collaborating with them and
							accomplished experts to ensure outstanding value for
							all stakeholders of the client organization. As a
							solution oriented practice, we collaborate to
							identify cost effective processes and technologies
							and empower people to exploit them to the optimum.We
							ensure that business objectives are not hampered by
							technology or ignorance, working with customers and
							experts to deploy cost effective processes which
							empower staff and optimize their interaction with
							technology to attain corporate and customer goals.
							<br />
							<br />
						</p>
					</HeaderInfo>
					<ProjectInfo>
						<h5 className="font15">Some Projects Executed:</h5>
						<ul>
							<li>
								<p className="font15 semiBold">Nigerian Bank</p>
								<p className="font15">
									Key Challenge: Complete re-engineering of
									operational processes
								</p>
								<p className="font15">
									Key Outcome: Cost savings of over a billion
									naira in the first year. Savings have been
									increasing with bank growth and complexity
									of transactions. Improved compliance
									environment. Improved data to premise
									decisions. Reduced cycle time for key
									transactionse.g credit processing to 2-3
									hours from 2-3 days. Drastically reduced
									time-to-market for new products and
									processes.
								</p>
							</li>
							<li>
								<p className="font15 semiBold">
									Oil Service Company
								</p>
								<p className="font15">
									Key Challenge: Significant growthis
									resulting in inefficiencies in resource
									management e.g. salary payment to separated
									staff etc
								</p>
								<p className="font15">
									Key Outcome: Detection and fixing of
									previous errors and the root causes.
									Continued seamless growthwithout prior
									attendant issues.
								</p>
							</li>
							<li>
								<p className="font15 semiBold">
									Aluminum Products Manufacturing Company
								</p>
								<p className="font15">
									Key Challenge: Cumbersome accounting and
									marketing processes. Significant delay in
									obtaining management reports.
								</p>
								<p className="font15">
									Key Outcome: Automated processing and
									generation of required information.
									Increased product lines and customer base.
									18% Reduction of processing costs.
								</p>
							</li>
						</ul>
					</ProjectInfo>
				</div>
				<div className="lightBg">
					<div className="container">
						<Advertising className="flexSpaceCenter">
							<AddLeft>
								<p className="font15">
									We have completed several projects which
									have led to significant benefits for the
									client organizations in the areas of
									improved quality and customer satisfaction.
									This is in addition to other benefits like
									drastically reduced error rates, cycle time;
									improved control environment and management
									oversight, to name a few.
								</p>
								<ButtonsRow
									className="flexNullCenter"
									style={{ margin: "30px 0" }}
								>
									<div
										style={{
											width: "190px",
											marginLeft: "15px",
										}}
									>
										<LinkStyle
											className="pointer flexNullCenter"
											to="contact"
											smooth={true}
										>
											Contact Us
										</LinkStyle>
									</div>
								</ButtonsRow>
							</AddLeft>
							<AddRight>
								<AddRightInner>
									<div className="flexNullCenter">
										<AddImgWrapp1 className="flexCenter">
											<img src={AddImage1} alt="office" />
										</AddImgWrapp1>
										<AddImgWrapp2>
											<img src={AddImage2} alt="office" />
										</AddImgWrapp2>
									</div>
									<div className="flexNullCenter">
										<AddImgWrapp3>
											<img src={AddImage3} alt="office" />
										</AddImgWrapp3>
										<AddImgWrapp4>
											<img src={AddImage4} alt="office" />
										</AddImgWrapp4>
									</div>
								</AddRightInner>
							</AddRight>
						</Advertising>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	width: 100%;
`;
const HeaderInfo = styled.div`
	@media (max-width: 860px) {
		text-align: center;
	}
`;

const ProjectInfo = styled.div`
	ul {
		list-style: disc;
	}
	@media (max-width: 860px) {
		text-align: justify;
	}
`;

const Advertising = styled.div`
	margin: 80px 0;
	padding: 100px 0;
	position: relative;
	@media (max-width: 1160px) {
		padding: 100px 0 40px 0;
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
	position: absolute;
	top: -70px;
	right: 0;
	@media (max-width: 860px) {
		width: 80%;
		position: relative;
		order: 1;
		top: -40px;
	}
`;
const AddRightInner = styled.div`
	width: 100%;
`;
const AddImgWrapp1 = styled.div`
	width: 48%;
	margin: 0 6% 10px 6%;
	img {
		width: 100%;
		height: auto;
		border-radius: 1rem;
		box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
	}
`;
const AddImgWrapp2 = styled.div`
	width: 30%;
	margin: 0 5% 10px 5%;
	img {
		width: 100%;
		height: auto;
		border-radius: 1rem;
		box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
	}
`;
const AddImgWrapp3 = styled.div`
	width: 20%;
	margin-left: 40%;
	img {
		width: 100%;
		height: auto;
		border-radius: 1rem;
		box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
	}
`;
const AddImgWrapp4 = styled.div`
	width: 30%;
	margin: 0 5% auto;
	img {
		width: 100%;
		height: auto;
		border-radius: 1rem;
		box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
	}
`;

const LinkStyle = styled(Link)`
	border: 1px solid #a91d1f;
	width: 100%;
	text-align: center;
	align-items: center;
	justify-content: center;
	padding: 10px 15px;
	outline: none;
	border-radius: 20px;
	color: #707070;
	:hover {
		background-color: ${(props) =>
			props.border ? "transparent" : "#a91d1f"};
		border: 1px solid #a91d1f;
		color: ${(props) => (props.border ? "#a91d1f" : "#fff")};
	}
`;
