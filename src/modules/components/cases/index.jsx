import styled from 'styled-components'

import cases1Jpg from '../../../assets/cases/cases1.jpg'
import cases1Webp from '../../../assets/cases/cases1.webp'
import cases1Jpg2x from '../../../assets/cases/cases1@2x.jpg'
import cases1Webp2x from '../../../assets/cases/cases1@2x.webp'
import cases2Jpg from '../../../assets/cases/cases2.jpg'
import cases2Webp from '../../../assets/cases/cases2.webp'
import cases2Jpg2x from '../../../assets/cases/cases2@2x.jpg'
import cases2Webp2x from '../../../assets/cases/cases2@2x.webp'
import cases3Jpg from '../../../assets/cases/cases3.jpg'
import cases3Webp from '../../../assets/cases/cases3.webp'
import cases3Jpg2x from '../../../assets/cases/cases3@2x.jpg'
import cases3Webp2x from '../../../assets/cases/cases3@2x.webp'
import cases4Jpg from '../../../assets/cases/cases4.jpg'
import cases4Webp from '../../../assets/cases/cases4.webp'
import cases4Jpg2x from '../../../assets/cases/cases4@2x.jpg'
import cases4Webp2x from '../../../assets/cases/cases4@2x.webp'
import cases5Jpg from '../../../assets/cases/cases5.jpg'
import cases5Webp from '../../../assets/cases/cases5.webp'
import cases5Jpg2x from '../../../assets/cases/cases5@2x.jpg'
import cases5Webp2x from '../../../assets/cases/cases5@2x.webp'
import cases6Jpg from '../../../assets/cases/cases6.jpg'
import cases6Webp from '../../../assets/cases/cases6.webp'
import cases6Jpg2x from '../../../assets/cases/cases6@2x.jpg'
import cases6Webp2x from '../../../assets/cases/cases6@2x.webp'

import { Container } from '../container'
import { vars } from '../../../stylesheet'
import { Picture } from '../../common'

const CasesSection = styled.section`
	display: flex;
	flex-direction: column;
`
const CasesBox = styled.div`
	padding-top: 40px;
	padding-bottom: 40px;
`
const CasesDescr = styled.p`
	font-size: 20px;
	line-height: 1.65;
	color: ${vars.color.fonts.third};
	margin-bottom: 20px;
	text-align: center;
`
const CasesTitle = styled.h3`
	font-weight: 300;
	font-size: 38px;
	line-height: 48px;
	color: ${vars.color.fonts.third};
	margin-bottom: 20px;
	text-align: center;
`
const CasesText = styled.p`
	color: ${vars.color.fonts.third};
	margin-bottom: 20px;
	text-align: center;
`
const PictureWrapper = styled.div`
	overflow: hidden;
	height: 176px;

	&:not(:last-child) {
		margin-bottom: 8px;
	}
`

export const Cases = () => {
	return (
		<CasesSection>
			<Container>
				<CasesBox>
					<CasesDescr>This is what we do</CasesDescr>
					<CasesTitle>
						Business <br /> Cases
					</CasesTitle>
					<CasesText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</CasesText>
					<PictureWrapper>
						<Picture jpg1x={cases1Jpg} jpg2x={cases1Webp} webp1x={cases1Jpg2x} webp2x={cases1Webp2x} />
					</PictureWrapper>
					<PictureWrapper>
						<Picture jpg1x={cases2Jpg} jpg2x={cases2Webp} webp1x={cases2Jpg2x} webp2x={cases2Webp2x} />
					</PictureWrapper>
					<PictureWrapper>
						<Picture jpg1x={cases3Jpg} jpg2x={cases3Webp} webp1x={cases3Jpg2x} webp2x={cases3Webp2x} />
					</PictureWrapper>
					<PictureWrapper>
						<Picture jpg1x={cases4Jpg} jpg2x={cases4Webp} webp1x={cases4Jpg2x} webp2x={cases4Webp2x} />
					</PictureWrapper>
					<PictureWrapper>
						<Picture jpg1x={cases5Jpg} jpg2x={cases5Webp} webp1x={cases5Jpg2x} webp2x={cases5Webp2x} />
					</PictureWrapper>
					<PictureWrapper>
						<Picture jpg1x={cases6Jpg} jpg2x={cases6Webp} webp1x={cases6Jpg2x} webp2x={cases6Webp2x} />
					</PictureWrapper>
				</CasesBox>
			</Container>
		</CasesSection>
	)
}
