import { About, Header, Hero, Blog, Cases, Team, Contact, Footer } from '../../components'

document.querySelectorAll('a[href^="#"').forEach((link) => {
	link.addEventListener('click', function (e) {
		e.preventDefault()

		let href = this.getAttribute('href').substring(1)

		const scrollTarget = document.getElementById(href)

		const topOffset = document.querySelector('.scrollto').offsetHeight
		const elementPosition = scrollTarget.getBoundingClientRect().top
		const offsetPosition = elementPosition - topOffset

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth',
		})
	})
})

export const Home = () => {
	return (
		<>
			<Header />
			<Hero />
			<About />
			<Cases />
			<Blog />
			<Team />
			<Contact />
			<Footer />
		</>
	)
}
