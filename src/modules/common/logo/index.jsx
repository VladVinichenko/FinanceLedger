import { sprite } from '../../../assets'
import styled from 'styled-components'
import { vars } from '../../../stylesheet'

const scrollToTop = (e) => {
	e.preventDefault()
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}

export const Logo = ({ className }) => {
	return (
		<LogoLink onClick={scrollToTop} className={className}>
			<LogoSvg>
				<use href={`${sprite}#logo`}></use>
			</LogoSvg>
			<LogoText>
				Finance<LogoSpan>Ledger</LogoSpan>
			</LogoText>
		</LogoLink>
	)
}

const LogoLink = styled.a`
	display: flex;
	align-items: center;
	transition: all 250ms;

	&:hover,
	&:focus {
		transform: scale(1.05);
		filter: brightness(1.2);
	}
`

const LogoSvg = styled.svg`
	width: 40px;
	height: 35px;
	fill: ${vars.color.fonts.fifth};
	margin-right: 6px;
`
const LogoText = styled.h1`
	color: ${vars.color.fonts.fifth};
	font-family: 'Open Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 32px;
	line-height: 1.21;
	width: min-content;
	margin: 0;

	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		font-size: 35px;
	}
`

const LogoSpan = styled.span`
	color: ${vars.color.fonts.primary};

	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		margin-left: 5px;
	}
`
