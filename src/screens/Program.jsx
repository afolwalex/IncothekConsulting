import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Description from "../components/ProgramSections/Description";
import TopBar from "../components/ProgramSections/TopBar";
import programs from "../programs";

export default function Program() {
	const params = useParams();

	const [show, setShow] = useState(false);
	const [detail, setDetail] = useState({});
	const [nextTitle, setNextTitle] = useState({});

	useEffect(() => {
		findParams();
		window.scrollTo(0, 0);
	}, [params]);

	const findParams = () => {
		const find = programs.find((p) => p.name === params.name);
		if (find) {
			setShow(true);
			setDetail(find);
			getNext(find.id);
		} else {
			setShow(false);
			setDetail({});
		}
	};

	const getNext = (id) => {
		let no;
		if (id === 6) {
			no = 1;
		} else {
			no = id + 1;
		}
		const find = programs.find((p) => p.id === no);
		find ? setNextTitle(find) : setNextTitle({});
	};

	return show && detail.id ? (
		<>
			<TopBar title={detail.title} />
			<Description desc={detail} />
			<NextSection>
				<div className="container">
					<Link to={"/"}>Back to Home</Link>
					<Link to={`/program/${nextTitle.name}`}>
						{nextTitle.title} &#x2192;
					</Link>
				</div>
			</NextSection>
		</>
	) : (
		<>
			<TopBar title={"Page Not Found"} />
		</>
	);
}

const NextSection = styled.nav`
	padding-bottom: 40px;

	.container {
		display: flex;
		justify-content: space-between;

		a {
			background: transparent;
			border: 1px solid #a91d1f;
			padding: 10px 30px;
			color: #a91d1f;
			border-radius: 3px;
		}
	}
`;
