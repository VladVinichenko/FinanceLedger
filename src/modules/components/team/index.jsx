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
`
const TeamBox = styled.div`
	padding-top: 40px;
	padding-bottom: 40px;
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

const TeamList = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	&:not(:last-child) {
		margin-bottom: 20px;
		color: ${vars.color.fonts.third};
	}
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

	margin-bottom: 16px;
`

export const Team = () => {
	return (
		<TeamSection>
			<Container>
				<TeamBox>
					<TeamDescr>Who we are</TeamDescr>
					<TeamTitle>
						Our
						<br />
						Professional
						<br />
						Team
					</TeamTitle>
					<TeamText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</TeamText>
					<ul>
						<TeamList>
							<PictureWrapper>
								<Picture jpg1x={person1Jpg} jpg2x={person1Webp} webp1x={person1Jpg2x} webp2x={person1Webp2x} />
							</PictureWrapper>
							<PersonName>John Doe</PersonName>
							<PersonDescr>President</PersonDescr>
						</TeamList>
						<TeamList>
							<PictureWrapper>
								<Picture jpg1x={person2Jpg} jpg2x={person2Webp} webp1x={person2Jpg2x} webp2x={person2Webp2x} />
							</PictureWrapper>
							<PersonName>Jane Doe</PersonName>
							<PersonDescr>Vice President</PersonDescr>
						</TeamList>
						<TeamList>
							<PictureWrapper>
								<Picture jpg1x={person3Jpg} jpg2x={person3Webp} webp1x={person3Jpg2x} webp2x={person3Webp2x} />
							</PictureWrapper>
							<PersonName>Steve Smith</PersonName>
							<PersonDescr>Marketing Head</PersonDescr>
						</TeamList>
					</ul>
				</TeamBox>
			</Container>
		</TeamSection>
	)
}
