import styled from 'styled-components'
import { vars } from '../../../stylesheet'

const ButtonStyle = styled.button`
	width: ${(props) => props.width || '156px'};
	height: 45px;
	left: 82px;
	top: 392px;
	background: ${vars.color.accent.primary};
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${vars.color.fonts.primary};
	fill: ${vars.color.fonts.primary};
`

export const Button = ({ children, className }) => {
	return <ButtonStyle className={className}>{children}</ButtonStyle>
}
