import styled from 'styled-components'
import { Logo, NavLink } from '../../common'
import { vars } from '../../../stylesheet'
import { useState } from 'react'

export const Header = () => {
	const [visible, setVisible] = useState({ opacity: '0' })

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop
		if (scrolled > 120) {
			setVisible({ opacity: '0.8' })
		} else if (scrolled <= 120) {
			setVisible({ opacity: '0' })
		}
	}

	document.querySelectorAll('a[href^="#"').forEach((link) => {
		link.addEventListener('click', function (e) {
			e.preventDefault()

			let href = this.getAttribute('href').substring(1)

			const scrollTarget = document.getElementById(href)

			const topOffset = document.querySelector('.scrollto').offsetHeight
			// const topOffset = 0 // если не нужен отступ сверху
			const elementPosition = scrollTarget.getBoundingClientRect().top
			const offsetPosition = elementPosition - topOffset

			window.scrollBy({
				top: offsetPosition,
				behavior: 'smooth',
			})
		})
	})

	window.addEventListener('scroll', toggleVisible)
	return (
		<HeaderStyle className='scrollto'>
			<HeaderBackground style={visible} />
			<LogoNav />
			<HeaderNav>
				<NavList>
					<li>
						<NavLink link='#home'>Home</NavLink>
					</li>
					<li>
						<NavLink link='#about'>About</NavLink>
					</li>
					<li>
						<NavLink link='#cases'>Cases</NavLink>
					</li>
					<li>
						<NavLink link='#blog'>Blog</NavLink>
					</li>
					<li>
						<NavLink link='#contact'>Contact</NavLink>
					</li>
				</NavList>
			</HeaderNav>
		</HeaderStyle>
	)
}

const HeaderNav = styled.nav`
	z-index: 5;
`

const HeaderBackground = styled.div`
	transition: opacity 250ms;
	background-color: black;
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: -1;
	left: 0;
	top: 0;
`

const HeaderStyle = styled.header`
	padding: 21px 22px;
	position: fixed;
	z-index: 3;
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
	z-index: 5;
`

const NavList = styled.ul`
	display: flex;
	justify-content: space-between;
	z-index: 5;
	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		justify-content: flex-end;
		li {
			&:not(:first-child) {
				margin-left: 20px;
			}
		}
	}
	@media screen and (min-width: ${vars.breakpoints.desktop}) {
		li {
			&:not(:first-child) {
				margin-left: 40px;
			}
		}
	}
`
