import { vars } from '../../../stylesheet'
import styled from 'styled-components'
import { sprite } from '../../../assets'

const SocialList = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 8px;
	width: 100%;
	/* li {
		&:not(:last-child) {
			margin-right: 25px;
		}
	} */
`

const SocialItem = styled.li``

const SocialLink = styled.a``
const SocialSvg = styled.svg`
	width: 35px;
	height: 35px;
	margin-right: 6px;
	transition: fill 250ms;

	&:hover,
	&:focus {
		fill: ${vars.color.accent.primary};
	}
`

const SocialSvgYoutube = styled(SocialSvg)`
	width: 40px;
`

export const Social = () => {
	return (
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
		</SocialList>
	)
}
