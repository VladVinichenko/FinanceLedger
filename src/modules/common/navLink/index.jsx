import styled from 'styled-components'
import { vars } from '../../../stylesheet'

const Link = styled.a`
	color: ${vars.color.fonts.primary};
	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		font-size: 18px;
		line-height: 1.56;
	}
`

export const NavLink = ({ children }) => {
	return <Link>{children}</Link>
}
