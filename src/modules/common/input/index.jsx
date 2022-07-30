import { vars } from '../../../stylesheet'
import styled from 'styled-components'
import warning from '../../../assets/worning.svg'

const InputStyle = styled.input`
	width: 280px;
	height: 40px;
	padding: 8px;
	position: relative;
	background: ${vars.color.background.primary};
	border: 1px solid ${vars.color.accent.fourth};

	&::placeholder {
		font-size: 16px;
		line-height: 23px;
		color: ${vars.color.fonts.fourth};
	}

	&:invalid {
		background-image: url(${warning});
		background-repeat: no-repeat;
		background-position: 98%;
	}
`

export const Input = ({ name, value, inputData, isRequired, placeholder, minlength, pattern, className }) => {
	return (
		<InputStyle
			className={className}
			onChange={inputData}
			value={value}
			name={name}
			type='text'
			placeholder={placeholder}
			required={isRequired ? true : false}
			minlength={minlength}
			pattern={pattern}
		/>
	)
}
