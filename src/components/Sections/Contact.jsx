import React, { useState } from "react";
import styled from "styled-components";
// Assets
import ContactImg3 from "../../assets/img/contact.jpg";

export default function Contact() {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");

	const handleSubmit = () => {
		if (fullName && email && subject) {
			let url = `mailto:olaitan.aina@incothekconsulting.com?subject=${subject}`;
			window.location.href = url;
		} else {
			alert("All fields are required");
		}
	};

	return (
		<Wrapper id="contact">
			<div className="lightBg">
				<div className="container">
					<HeaderInfo>
						<h1 className="font40 extraBold">Let's get in touch</h1>
						<p className="font15">
							You can send a mail to us via
							olaitan.aina@incothekconsulting.com, or fill this
							form to easily navigate to your mailbox.
						</p>
					</HeaderInfo>
					<div className="row" style={{ paddingBottom: "30px" }}>
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
							<Form>
								<label className="font13">Full Name:</label>
								<input
									type="text"
									id="fname"
									name="fname"
									className="font20"
									value={fullName}
									onChange={(e) =>
										setFullName(e.target.value)
									}
								/>
								<label className="font13">Email:</label>
								<input
									type="text"
									id="email"
									name="email"
									className="font20"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<label className="font13">Subject:</label>
								<input
									type="text"
									id="subject"
									name="subject"
									className="font20"
									value={subject}
									onChange={(e) => setSubject(e.target.value)}
								/>
							</Form>
							<SumbitWrapper className="flex">
								<ButtonInput
									type="submit"
									value="Send Message"
									className="pointer animate radius8"
									style={{ maxWidth: "220px" }}
									onClick={handleSubmit}
								/>
							</SumbitWrapper>
						</div>
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
							<ContactImg>
								<div style={{ width: "100%" }}>
									<div style={{ marginTop: "100px" }}>
										<img
											src={ContactImg3}
											alt="office"
											className="radius6"
										/>
									</div>
								</div>
							</ContactImg>
						</div>
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
	padding: 70px 0 30px 0;
	@media (max-width: 860px) {
		text-align: center;
	}
`;
const Form = styled.form`
	padding: 70px 0 30px 0;
	input,
	textarea {
		width: 100%;
		background-color: transparent;
		border: 0px;
		outline: none;
		box-shadow: none;
		border-bottom: 1px solid #707070;
		height: 30px;
		margin-bottom: 30px;
	}
	textarea {
		min-height: 100px;
	}
	@media (max-width: 860px) {
		padding: 30px 0;
	}
`;
const ButtonInput = styled.input`
	border: 1px solid #a91d1f;
	background-color: #a91d1f;
	width: 100%;
	padding: 15px;
	outline: none;
	color: #fff;
	:hover {
		background-color: #580cd2;
		border: 1px solid #7620ff;
		color: #fff;
	}
	@media (max-width: 991px) {
		margin: 0 auto;
	}
`;
const ContactImg = styled.div`
	@media (max-width: 991px) {
		display: none;
	}
`;
const SumbitWrapper = styled.div`
	@media (max-width: 991px) {
		width: 100%;
		margin-bottom: 50px;
	}
`;
