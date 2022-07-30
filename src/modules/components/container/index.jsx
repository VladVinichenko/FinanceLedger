import styled from 'styled-components'
import { vars } from '../../../stylesheet'

export const Container = styled.div`
	margin-left: auto;
	margin-right: auto;
	position: relative;
	overflow-x: hidden;
	background-color: ${(props) => props.backgroundColor || vars.color.background.primary};
	width: 320px;
	padding-left: ${(props) => props.sidePaddings || '20px'};
	padding-right: ${(props) => props.sidePaddings || '20px'};
	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		padding-left: ${(props) => props.sidePaddings || '32px'};
		padding-right: ${(props) => props.sidePaddings || '32px'};
		width: 768px;
	}
	@media screen and (min-width: ${vars.breakpoints.desktop}) {
		padding-left: ${(props) => props.sidePaddings || '28px'};
		padding-right: ${(props) => props.sidePaddings || '28px'};
		width: 1360px;
	}
`
