import { Logo } from '../../common'
import { About, Header, Hero, Blog, Cases, Team, Contact, Footer } from '../../components'

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
