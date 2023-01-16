import React from "react";
import styled from "styled-components";
// Components
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function About() {
	return (
		<Wrapper id="about">
			<div className="whiteBg">
				<div className="container">
					<HeaderInfo>
						<h1 className="font40 extraBold">About Us</h1>
						<p className="font16">
							Incothek Group is a consortium of experts who
							collaborate to bring solutions which empower our
							clients to fulfill their dreams and stay ahead of
							competition. Our areas of expertise include Lean
							Business Process Management, Six Sigma, Continuous
							Improvement and Training. We believe that
							organisations that would be most successful will be
							those that are market focused, niche-driven, lean,
							flexible and fast to react to market needs. Most
							importantly, such an organization will have low
							expense levels and continually pursue improvements.
							We therefore work with our clients to achieve all of
							the above and empower their staff to build all the
							necessary skills to continually succeed. As a
							solution oriented organization, we partner with the
							best organizations and experts in the world to
							create the exact solutions which meet the immediate
							requirements of our clients and also allow them to
							easily navigate the rapidly changing environment,
							enabling them to take advantage of emerging
							opportunities while minimizing risks. In addition to
							several other award winning solutions, our experts
							have jointly conceived and implemented a Business
							Process Management platform which is currently
							enables a financial institution to avoid spending
							billions of naira annually, while increasing
							efficiency and customer service and reducing
							operational risks. The cost savings have been
							increasing as the organization grew, both in size
							and complexity of operations.
						</p>
					</HeaderInfo>
					<TestimonialSlider />
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	width: 100%;
	padding-top: 20px;
	padding-bottom: 30px;
`;
const HeaderInfo = styled.div`
	margin-bottom: 30px;
	@media (max-width: 860px) {
		text-align: center;
	}
`;
