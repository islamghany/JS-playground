import styled from 'styled-components'
const HeaderContainer = styled.header`
	display:flex;
	height:4rem;
	width:100%;
	background:${({theme})=>theme.colors.bg};
	border-bottom:1px solid ${({theme})=>theme.colors.border};
`
const Header = ()=>{
	return <HeaderContainer>
		
	</HeaderContainer>
}
export default Header;