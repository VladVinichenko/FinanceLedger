import styled from 'styled-components'
import { Logo, NavLink } from '../../common'
import { Container } from '../container'
import { vars } from '../../../stylesheet'

export const Header = () => {
	return (
		<HeaderStyle>
			<LogoNav />
			<HeaderNav>
				<NavList>
					<li>
						<NavLink>Home</NavLink>
					</li>
					<li>
						<NavLink>About</NavLink>
					</li>
					<li>
						<NavLink>Cases</NavLink>
					</li>
					<li>
						<NavLink>Blog</NavLink>
					</li>
					<li>
						<NavLink>Contact</NavLink>
					</li>
				</NavList>
			</HeaderNav>
		</HeaderStyle>
	)
}

const HeaderNav = styled.nav``

const HeaderStyle = styled.header`
	padding: 21px 22px;
	position: fixed;
	z-index: 1;
	top: 0;
	left: 50%;
	transform: translate(-50%);
	width: ${vars.breakpoints.mobile};
	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		padding-left: 32px;
		padding-right: 32px;
		padding-top: 20px;
		padding-bottom: 20px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: ${vars.breakpoints.tablet};
	}
	@media screen and (min-width: ${vars.breakpoints.desktop}) {
		padding-left: 28px;
		padding-right: 28px;
		width: ${vars.breakpoints.desktop};
	}
`

const LogoNav = styled(Logo)`
	margin-bottom: 12px;
	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		margin-bottom: 0px;
	}
`

const NavList = styled.ul`
	display: flex;
	justify-content: space-between;
	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		justify-content: flex-end;
		li {
			&:not(:first-child) {
				margin-left: 20px;
			}
		}
	}
`
