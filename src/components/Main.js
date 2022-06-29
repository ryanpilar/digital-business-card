import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from  '@fortawesome/free-solid-svg-icons'

import {faLinkedin} from  '@fortawesome/free-brands-svg-icons'
import {faGithubSquare} from  '@fortawesome/free-brands-svg-icons'




const Main = () => {
  return (
    <main className="App-main">
        <h1>Ryan Pilarczyk</h1>
        <h3>Full-Stack Web Developer</h3>
        <a href="#"><h5>ryanpilar.ca</h5></a>
        
        <a href="mailto:ryan_pilar@outlook.com">
          <button className="btn main--white">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Email</span>
          </button>
        </a>

        <a href="https://www.linkedin.com/in/ryan-pilarczyk-87165b20a/" target="blank">
          <button className="btn main--blue">
              <FontAwesomeIcon icon={faLinkedin} />
              LinkedIn
          </button>
        </a>

    </main>
  )
}

export default Main