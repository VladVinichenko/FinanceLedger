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

const ContactContainer = styled(Container)`
	display: flex;
	flex-direction: column;

	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		flex-direction: row;
	}
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
			width: 100%;
		}
	}

	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		width: 354px;
		padding-left: 32px;
		padding-right: 44px;
	}
	@media screen and (min-width: ${vars.breakpoints.desktop}) {
		width: 690px;
		padding-top: 80px;
		input {
			&:last-child {
				margin-bottom: 60px;
			}
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

	transition: opacity 250ms;

	&:hover,
	&:focus {
		opacity: 0.8;
	}
`

const PictureWrapper = styled.div`
	overflow: hidden;
	height: 220px;

	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		height: 354px;
		width: 368px;
		img {
			width: 368px;
			height: 354px;
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

const encode = (data) => {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&')
}

export const Contact = () => {
	const handleSubmit = (e) => {
		e.preventDefault()
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({ 'form-name': 'contact', ...this.state }),
		})
			.then(() => alert('Success!'))
			.catch((error) => alert(error))
	}

	return (
		<ContactSection id='contact'>
			<ContactContainer sidePaddings='0' backgroundColor={vars.color.background.seconary}>
				<PictureWrapper>
					<Picture jpg1x={contactJpg} jpg2x={contact2xJpg} webp1x={contactWebp} webp2x={contact2xWebp} />
				</PictureWrapper>
				<ContactForm method='post' onSubmit={handleSubmit} name='callback'>
					<ContactTitle>Request Callback</ContactTitle>
					<Input minlength='2' name='name' placeholder='Enter your name'></Input>
					<Input minlength='2' name='email' placeholder='Enter email*' isRequired></Input>
					<ContactButton type='submit'>Send</ContactButton>
				</ContactForm>
			</ContactContainer>
		</ContactSection>
	)
}
