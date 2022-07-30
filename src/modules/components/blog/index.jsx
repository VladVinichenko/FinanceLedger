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
const BlogBox = styled.div`
	padding-top: 40px;
	padding-left: 30px;
	padding-right: 30px;
	padding-bottom: 40px;
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
`

export const Blog = () => {
	return (
		<BlogSection>
			<Container sidePaddings='0' backgroundColor={vars.color.background.fourth}>
				<Picture jpg1x={blogJpg} jpg2x={blog2xJpg} webp1x={blogWebp} webp2x={blog2xWebp} />
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
			</Container>
		</BlogSection>
	)
}
