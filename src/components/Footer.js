

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faEnvelope} from  '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from  '@fortawesome/free-brands-svg-icons'
import {faGithubSquare} from  '@fortawesome/free-brands-svg-icons'
import {faTwitterSquare} from  '@fortawesome/free-brands-svg-icons'
import {faFileUser} from  '@fortawesome/free-solid-svg-icons'




const Footer = () => {
  return (
    <footer className="App-footer">

        <a href="https://www.linkedin.com/in/ryan-pilarczyk-87165b20a/" target="blank"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://twitter.com/_ryanpilar_" target="blank"><FontAwesomeIcon icon={faTwitterSquare} /></a>
        <a href="mailto:ryan_pilar@outlook.com" target="blank"><FontAwesomeIcon icon={faEnvelope} /></a>
        <a href="https://github.com/ryanpilar" target="blank"><FontAwesomeIcon icon={faGithubSquare} /></a>

    </footer>
  )
}

export default Footer