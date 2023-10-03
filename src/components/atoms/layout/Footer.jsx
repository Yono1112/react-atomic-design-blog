import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Footer = () => {
	return (
		<SFooter>
			&copy
		</SFooter>
	)
}

const SFooter = styled.header`
	background-color: #11999e;
	color: #fff;
	text-align: center;
	padding: 8px 0;
`

const SLink = styled(Link)`
	margin: 0 8px;
`