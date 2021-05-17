import '../styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { fab, faTwitter, faLinkedin, faInstagram, faGithub, faDiscord, faYoutube, faTwitch } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


library.add(fab, faTwitter, faTwitch, faLinkedin, faInstagram, faGithub, faEnvelope, faDiscord, faYoutube)


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
