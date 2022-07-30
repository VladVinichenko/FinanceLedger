import styled from 'styled-components'
import { vars } from '../../../stylesheet'

const Link = styled.a`
	color: ${vars.color.fonts.primary};
	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		font-size: 18px;
		line-height: 1.56;
	}
	position: relative;
	&:hover,
	&:focus,
	&:active {
		&::before {
			content: '';
			border-bottom: 2px solid ${vars.color.accent.primary};
			position: absolute;
			width: 160%;
			height: 150%;
			transform: translate(-18%);
		}
	}
`

export const NavLink = ({ children, link }) => {
	return <Link href={link}>{children}</Link>
}
