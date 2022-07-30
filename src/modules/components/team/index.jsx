import styled from 'styled-components'

import person1Jpg from '../../../assets/team/person1.jpg'
import person1Webp from '../../../assets/team/person1.webp'
import person1Jpg2x from '../../../assets/team/person1@2x.jpg'
import person1Webp2x from '../../../assets/team/person1@2x.webp'
import person2Jpg from '../../../assets/team/person2.jpg'
import person2Webp from '../../../assets/team/person2.webp'
import person2Jpg2x from '../../../assets/team/person2@2x.jpg'
import person2Webp2x from '../../../assets/team/person2@2x.webp'
import person3Jpg from '../../../assets/team/person3.jpg'
import person3Webp from '../../../assets/team/person3.webp'
import person3Jpg2x from '../../../assets/team/person3@2x.jpg'
import person3Webp2x from '../../../assets/team/person3@2x.webp'

import { Container } from '../container'
import { vars } from '../../../stylesheet'
import { Picture } from '../../common'

const TeamSection = styled.section`
	display: flex;
	flex-direction: column;
	height: max-content;
`
const TeamBox = styled.div`
	padding-top: 40px;
	padding-bottom: 40px;
	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		height: max-content;
	}
	@media screen and (min-width: ${vars.breakpoints.desktop}) {
		padding-top: 80px;
		padding-bottom: 80px;
	}
`
const TeamDescr = styled.p`
	font-size: 20px;
	line-height: 1.65;
	color: ${vars.color.fonts.third};
	margin-bottom: 20px;
	text-align: center;
`
const TeamTitle = styled.h3`
	font-weight: 300;
	font-size: 38px;
	line-height: 48px;
	color: ${vars.color.fonts.third};
	margin-bottom: 20px;
	text-align: center;
`

const TeamItem = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	&:not(:last-child) {
		margin-bottom: 20px;
		color: ${vars.color.fonts.third};
	}
	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		margin: 0;
		height: fit-content;
	}
`

const TeamWrapper = styled.div`
	background-color: black;
	opacity: 0.6;
	position: absolute;
	width: 100%;
	height: 100%;
`

const PersonName = styled.h4`
	font-size: 23px;
	line-height: 1.25;
	margin-bottom: 12px;
`

const PersonDescr = styled.h4``

const TeamText = styled.p`
	color: ${vars.color.fonts.third};
	margin-bottom: 20px;
	text-align: center;
`
const PictureWrapper = styled.div`
	overflow: hidden;
	height: 176px;
	position: relative;
	margin-bottom: 16px;
	z-index: 1;

	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		width: 223px;
		height: 148px;
		margin-bottom: 14px;
	}
	@media screen and (min-width: ${vars.breakpoints.desktop}) {
		width: 424px;
		height: 284px;
		margin-bottom: 20px;
	}
	transition: all 250ms;

	&:hover,
	&:focus {
		transform: scale(1.1);
	}
`

const TeamList = styled.ul`
	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		/* grid-auto-rows: 148px; */
		grid-column-gap: 17px;
	}
	@media screen and (min-width: ${vars.breakpoints.desktop}) {
		/* grid-auto-rows: 284px; */
		grid-column-gap: 19px;
	}
`

const TeamListSocial = styled.ul`
	opacity: 0;
	background-color: black;
	position: absolute;
	width: 100%;
	height: 100%;

	${PictureWrapper} ~ && {
		opacity: 0.8;
	}
`

export const Team = () => {
	return (
		<TeamSection>
			<Container>
				<TeamBox>
					<TeamDescr>Who we are</TeamDescr>
					<TeamTitle>Our Professional Team</TeamTitle>
					<TeamText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</TeamText>
					<TeamList>
						<TeamItem>
							<PictureWrapper>
								<TeamListSocial></TeamListSocial>
								<Picture jpg1x={person1Jpg} jpg2x={person1Webp} webp1x={person1Jpg2x} webp2x={person1Webp2x} />
								<TeamWrapper></TeamWrapper>
							</PictureWrapper>
							<PersonName>John Doe</PersonName>
							<PersonDescr>President</PersonDescr>
						</TeamItem>
						<TeamItem>
							<PictureWrapper>
								<Picture jpg1x={person2Jpg} jpg2x={person2Webp} webp1x={person2Jpg2x} webp2x={person2Webp2x} />
							</PictureWrapper>
							<PersonName>Jane Doe</PersonName>
							<PersonDescr>Vice President</PersonDescr>
						</TeamItem>
						<TeamItem>
							<PictureWrapper>
								<Picture jpg1x={person3Jpg} jpg2x={person3Webp} webp1x={person3Jpg2x} webp2x={person3Webp2x} />
							</PictureWrapper>
							<PersonName>Steve Smith</PersonName>
							<PersonDescr>Marketing Head</PersonDescr>
						</TeamItem>
					</TeamList>
				</TeamBox>
			</Container>
		</TeamSection>
	)
}
