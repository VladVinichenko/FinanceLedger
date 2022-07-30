import styled from 'styled-components'

const Img = styled.img`
	width: 100%;
	object-fit: cover;
`

export const Picture = ({ jpg1x, jpg2x, webp1x, webp2x, className }) => {
	return (
		<picture className={className}>
			<source srcSet={`${webp1x} 1x, ${webp2x} 2x`} type='image/webp' />
			<source srcSet={`${jpg1x} 1x, ${jpg2x} 2x`} />
			<Img src={jpg1x} alt='сайт на экране ноутбука' />
		</picture>
	)
}
