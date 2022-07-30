import styled from 'styled-components'
import { Container } from '../container'
import { vars } from '../../../stylesheet'
import { Social } from '../../common'

const FooterSection = styled.section`
	display: flex;
	flex-direction: column;
`

const FooterBox = styled.div`
	padding-top: 20px;
	padding-bottom: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${vars.color.fonts.primary};
	fill: ${vars.color.fonts.primary};
`

const FooterText = styled.h5``

const FooterSocialBox = styled.div`
	width: 216px;
`

export const Footer = () => {
	return (
		<FooterSection>
			<Container sidePaddings='0' backgroundColor={vars.color.background.third}>
				<FooterBox>
					<FooterSocialBox>
						<Social />
					</FooterSocialBox>

					<FooterText>Copyright © 2021 - FinanceLedger</FooterText>
				</FooterBox>
			</Container>
		</FooterSection>
	)
}
