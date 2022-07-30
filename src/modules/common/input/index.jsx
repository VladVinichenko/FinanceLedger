import { vars } from '../../../stylesheet'
import styled from 'styled-components'

const InputStyle = styled.input`
	width: 280px;
	height: 40px;
	left: 20px;
	top: 5093px;
	padding: 8px;

	background: ${vars.color.background.primary};
	border: 1px solid ${vars.color.accent.fourth};

	&::placeholder {
		font-size: 16px;
		line-height: 23px;
		color: ${vars.color.fonts.fourth};
	}
`

export const Input = ({ name, children, value, inputData, isRequired, placeholder, className }) => {
	return (
		<InputStyle
			className={className}
			onChange={inputData}
			value={value}
			name={name}
			type='text'
			placeholder={placeholder}
			required={isRequired ? true : false}
		/>
	)
}
