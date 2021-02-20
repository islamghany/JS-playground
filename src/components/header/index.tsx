import styled from "styled-components";
import Button from "../button/index";
import { useCode, update } from "../../hooks/playground";
import * as esbuild from "esbuild-wasm";
import bundle from "../../bundle/index";

const HeaderContainer = styled.header`
	display: flex;
	width: 100%;
	background: ${({ theme }) => theme.colors.bg};
	border-bottom: 1px solid ${({ theme }) => theme.colors.border};
	padding: 0.4rem 3rem;
`;

const Run = () => {
	const { data } = useCode();
	const onClick = async () => {
		const output = await bundle(data);
		if(output.error) update('error',output.err);
		else update('preview',output.code);	
	};
	return (
		<Button
			onClick={onClick}
		>
			Run
		</Button>
	);
};

const Header = () => {
	return (
		<HeaderContainer>
			<Run />
		</HeaderContainer>
	);
};
export default Header;