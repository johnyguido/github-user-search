import { Link } from 'react-router-dom'
import Button from '../../core/components/Button';
import './styles.css'

const Home = () => {
      return (
            <>
                  <div className="container">
                        <h1 className="title-container">
                              Desafio do Capítulo 3, <br />
                              Bootcamp DevSuperior
                        </h1>
                        <p className="text-container">
                              Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br />
                              <br />
                              Favor observar as instruções passadas no capítulo sobre a <br />
                              elaboração deste projeto.<br />
                              <br />
                              Este design foi adaptado a partir de Ant Design System for Figma, <br />
                              de Mateusz Wierzbicki:
                              <a className="link" href="mailto:antforfigma@gmail.com"> antforfigma@gmail.com</a> <br />
                        </p>
                        <Link to="/search">                             
                              <Button text='Começar'></Button>
                        </Link>
                  </div>

            </>
      )
}

export default Home;