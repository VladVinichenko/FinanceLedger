import styled from 'styled-components'
import { vars } from '../../../stylesheet'
import { Button } from '../../common'
import { Container } from '../container'
import { sprite } from '../../../assets'
import showcaseJpg from '../../../assets/home/showcase.jpg'
import showcaseWebp from '../../../assets/home/showcase.webp'
import showcase2xJpg from '../../../assets/home/showcase@2x.jpg'
import showcase2xWebp from '../../../assets/home/showcase@2x.webp'

const SectionHero = styled.section`
  padding-top: 142px;
  padding-bottom: 96px;
  background-color: black;

  position: relative;
 
    linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${showcaseJpg});
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url(${showcase2xJpg});
  }


		@media screen and (min-width: ${vars.breakpoints.tablet}) {
    padding-top: 407px;
  padding-bottom: 420px;
	}
	@media screen and (min-width: ${vars.breakpoints.desktop}) {
  padding-top: 279px;
  padding-bottom: 282px;
	}
`

const HeroTitle = styled.h2`
	text-align: center;
	font-weight: 300;
	font-size: 52px;
	line-height: 1.27;
	color: ${vars.color.fonts.seconary};
	margin-bottom: 20px;

	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		margin-bottom: 17px;
	}
	@media screen and (min-width: ${vars.breakpoints.desktop}) {
		margin-bottom: 24px;
	}
`

const HeroText = styled.p`
	text-align: center;
	font-size: 22px;
	line-height: 1.67;
	color: ${vars.color.fonts.seconary};
	margin-bottom: 24px;

	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		margin-bottom: 32px;
	}
`

const HeroButton = styled(Button)`
	margin-left: auto;
	margin-right: auto;
`

const HeroSvg = styled.svg`
	width: 9px;
	height: 18px;
	fill: ${vars.color.fonts.primary};
	margin-right: 4px;
`

export const Hero = () => {
	return (
		<Container sidePaddings='0'>
			<SectionHero>
				<HeroTitle>The Sky Is The Limit</HeroTitle>
				<HeroText>We provide world class financial assistance</HeroText>
				<HeroButton>
					<HeroSvg>
						<use href={`${sprite}#arrow`}></use>
					</HeroSvg>
					Read More
				</HeroButton>
			</SectionHero>
		</Container>
	)
}
