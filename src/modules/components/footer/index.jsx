import styled from 'styled-components'
import { Container } from '../container'
import { vars } from '../../../stylesheet'
import { Button, Picture, Input } from '../../common'
import { sprite } from '../../../assets'

const FooterSection = styled.section`
	display: flex;
	flex-direction: column;
`
// const SocialBox = styled.ul`
// 	/* background-color: ${vars.color.accent.primary}; */
// 	padding-top: 40px;
// 	padding-left: 20px;
// 	padding-right: 20px;
// 	padding-bottom: 50px;
// `

const FooterBox = styled.div`
	padding-top: 20px;
	padding-bottom: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${vars.color.fonts.primary};
	fill: ${vars.color.fonts.primary};
`
const SocialList = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-bottom: 8px;
	li {
		&:not(:last-child) {
			margin-right: 25px;
		}
	}
`

const FooterText = styled.h5``

const FooterButton = styled(Button)`
	width: 100%;
`

const SocialItem = styled.li``

const SocialLink = styled.a``
const SocialSvg = styled.svg`
	width: 35px;
	height: 35px;
	margin-right: 6px;
`

const SocialSvgYoutube = styled(SocialSvg)`
	width: 40px;
`

export const Footer = () => {
	return (
		<FooterSection>
			<Container sidePaddings='0' backgroundColor={vars.color.background.third}>
				<FooterBox>
					<SocialList>
						{/* <SocialBox> */}
						<SocialItem>
							<SocialLink>
								<SocialSvg>
									<use href={`${sprite}#facebook`}></use>
								</SocialSvg>
							</SocialLink>
						</SocialItem>
						<SocialItem>
							<SocialLink>
								<SocialSvg>
									<use href={`${sprite}#twitter`}></use>
								</SocialSvg>
							</SocialLink>
						</SocialItem>
						<SocialItem>
							<SocialLink>
								<SocialSvgYoutube>
									<use href={`${sprite}#youtube`}></use>
								</SocialSvgYoutube>
							</SocialLink>
						</SocialItem>
						<SocialItem>
							<SocialLink>
								<SocialSvg>
									<use href={`${sprite}#linkedin`}></use>
								</SocialSvg>
							</SocialLink>
						</SocialItem>
						{/* </SocialBox> */}
					</SocialList>
					<FooterText>Copyright © 2021 - FinanceLedger</FooterText>
				</FooterBox>
			</Container>
		</FooterSection>
	)
}
