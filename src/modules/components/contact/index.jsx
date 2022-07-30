import styled from 'styled-components'
import contactJpg from '../../../assets/home/contact.jpg'
import contactWebp from '../../../assets/home/contact.webp'
import contact2xJpg from '../../../assets/home/contact@2x.jpg'
import contact2xWebp from '../../../assets/home/contact@2x.webp'
import { Container } from '../container'
import { vars } from '../../../stylesheet'
import { Button, Picture, Input } from '../../common'

const ContactSection = styled.section`
	display: flex;
	flex-direction: column;
`
const ContactForm = styled.form`
	/* background-color: ${vars.color.accent.primary}; */
	padding-top: 40px;
	padding-left: 20px;
	padding-right: 20px;
	padding-bottom: 50px;
	input {
		&:not(:last-child) {
			margin-bottom: 32px;
		}
	}
`
const ContactTitle = styled.h5`
	font-weight: 300;
	font-size: 38px;
	line-height: 48px;
	color: ${vars.color.fonts.third};
	margin-bottom: 24px;
`

const ContactButton = styled(Button)`
	width: 100%;
`

const PictureWrapper = styled.div`
	overflow: hidden;
	height: 220px;
`

export const Contact = () => {
	return (
		<ContactSection>
			<Container sidePaddings='0' backgroundColor={vars.color.background.seconary}>
				<PictureWrapper>
					<Picture jpg1x={contactJpg} jpg2x={contact2xJpg} webp1x={contactWebp} webp2x={contact2xWebp} />
				</PictureWrapper>
				<ContactForm>
					<ContactTitle>We provide bespoke solutions</ContactTitle>
					<Input placeholder='Enter your name'></Input>
					<Input placeholder='Enter email*' isRequired></Input>
					<ContactButton type='submit'>Send</ContactButton>
				</ContactForm>
			</Container>
		</ContactSection>
	)
}
