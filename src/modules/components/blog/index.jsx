import styled from 'styled-components'
import blogJpg from '../../../assets/home/blog.jpg'
import blogWebp from '../../../assets/home/blog.webp'
import blog2xJpg from '../../../assets/home/blog@2x.jpg'
import blog2xWebp from '../../../assets/home/blog@2x.webp'
import { Container } from '../container'
import { vars } from '../../../stylesheet'
import { Button, Picture } from '../../common'

const BlogSection = styled.section`
	display: flex;
	flex-direction: column;
`
const BlogContainer = styled(Container)`
	display: flex;
	flex-direction: column;

	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		flex-direction: row-reverse;
	}
`

const BlogBox = styled.div`
	padding-top: 40px;
	padding-left: 30px;
	padding-right: 30px;
	padding-bottom: 40px;

	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		width: 400px;
		padding-left: 32px;
		padding-right: 60px;
	}
	@media screen and (min-width: ${vars.breakpoints.desktop}) {
		width: 690px;
		padding-left: 20px;
		padding-right: 80px;
		padding-top: 80px;
	}
`
const BlogDescr = styled.p`
	font-size: 20px;
	line-height: 1.65;
	color: ${vars.color.fonts.primary};
	margin-bottom: 8px;
`
const BlogTitle = styled.h3`
	font-weight: 300;
	font-size: 38px;
	line-height: 48px;
	color: ${vars.color.fonts.primary};
	margin-bottom: 24px;
`
const BlogText = styled.p`
	color: ${vars.color.fonts.primary};
	margin-bottom: 24px;
`

const BlogButton = styled(Button)`
	border: 1px solid ${vars.color.accent.seconary};
	background-color: ${vars.color.accent.third};
	border-radius: 5px;

	transition: all 250ms;

	&:hover,
	&:focus {
		border: 1px solid ${vars.color.accent.third};
		background-color: ${vars.color.accent.seconary};
		color: ${vars.color.accent.third};
	}
`

const PictureWrapper = styled.div`
	overflow: hidden;
	height: 220px;

	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		height: 493px;
		width: 368px;
		img {
			width: 368px;
			height: 493px;
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

export const Blog = () => {
	return (
		<BlogSection id='blog'>
			<BlogContainer sidePaddings='0' backgroundColor={vars.color.background.fourth}>
				<PictureWrapper>
					<Picture jpg1x={blogJpg} jpg2x={blog2xJpg} webp1x={blogWebp} webp2x={blog2xWebp} />
				</PictureWrapper>
				<BlogBox>
					<BlogDescr>April 16 2020</BlogDescr>
					<BlogTitle>Blog Post One</BlogTitle>
					<BlogText>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium
						asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus
						iste maiores deleniti?
					</BlogText>
					<BlogButton>Read Our Blog</BlogButton>
				</BlogBox>
			</BlogContainer>
		</BlogSection>
	)
}
