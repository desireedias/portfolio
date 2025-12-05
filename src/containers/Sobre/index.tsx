import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre Mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate
      quam molestiae nobis repudiandae eius, fugit corporis doloremque,
      doloribus quisquam possimus. Commodi est sunt quaerat inventore. Fugiat
      dolorum magnam perferendis!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats-sigma-five.vercel.app/api?username=ArthurHFagundes&show_icons=true&theme=dracula" />

      <img src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=ArthurHFagundes&layout=compact&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
