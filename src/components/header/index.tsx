import styled from 'styled-components'
const HeaderContainer = styled.header`
	display:flex;
	height:6rem;
	width:100%;
	background:${({theme})=>theme.colors.primary}
`
const Header = ()=>{
	return <HeaderContainer>
		
	</HeaderContainer>
}
export default Header;