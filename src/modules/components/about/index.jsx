import styled from 'styled-components'
import peopleJpg from '../../../assets/home/people.jpg'
import peopleWebp from '../../../assets/home/people.webp'
import people2xJpg from '../../../assets/home/people@2x.jpg'
import people2xWebp from '../../../assets/home/people@2x.webp'
import { Container } from '../container'
import { vars } from '../../../stylesheet'
import { Button, Picture } from '../../common'

const AboutSection = styled.section`
	/* display: flex;
	flex-direction: column; */
`
const AboutContainer = styled(Container)`
	display: flex;
	flex-direction: column;

	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		flex-direction: row;
	}
`

const AboutBox = styled.div`
	padding-top: 40px;
	padding-left: 30px;
	padding-right: 30px;
	padding-bottom: 40px;

	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		width: 400px;
		padding-left: 32px;
		padding-right: 60px;
	}
	@media screen and (min-width: ${vars.breakpoints.desktop}) {
		width: 690px;
		padding-left: 20px;
		padding-right: 80px;
		padding-top: 80px;
	}
`
const AboutDescr = styled.p`
	font-size: 20px;
	line-height: 1.65;
	color: ${vars.color.fonts.primary};
	margin-bottom: 8px;
`
const AboutTitle = styled.h3`
	font-weight: 300;
	font-size: 38px;
	line-height: 48px;
	color: ${vars.color.fonts.primary};
	margin-bottom: 24px;
`
const AboutText = styled.p`
	color: ${vars.color.fonts.primary};
	margin-bottom: 24px;
`

const AboutButton = styled(Button)`
	border: 1px solid ${vars.color.accent.seconary};
	border-radius: 5px;
`

const PictureWrapper = styled.div`
	overflow: hidden;
	height: 220px;

	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		height: 589px;
		width: 368px;
		img {
			width: 368px;
			height: 589px;
		}
	}
	@media screen and (min-width: ${vars.breakpoints.desktop}) {
		height: 460px;
		width: 670px;
		img {
			width: 670px;
			height: 460px;
		}
	}
`

export const About = () => {
	return (
		<AboutSection>
			<AboutContainer sidePaddings='0' backgroundColor={vars.color.background.fifth}>
				<PictureWrapper>
					<Picture jpg1x={peopleJpg} jpg2x={people2xJpg} webp1x={peopleWebp} webp2x={people2xWebp} />
				</PictureWrapper>
				<AboutBox>
					<AboutDescr>What you are looking for</AboutDescr>
					<AboutTitle>We provide bespoke solutions</AboutTitle>
					<AboutText>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium
						asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus
						iste maiores deleniti?
					</AboutText>
					<AboutButton>Read More</AboutButton>
				</AboutBox>
			</AboutContainer>
		</AboutSection>
	)
}
