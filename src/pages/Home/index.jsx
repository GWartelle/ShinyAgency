import HomeIllustration from '../../assets/home-illustration.svg'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Link } from 'react-router-dom'

const HomeWrapper = styled.div`
  background-color: ${colors.backgroundLight};
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 50px;
  margin: 50px;
`

const HomeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const StyledLink = styled(Link)`
  padding: 15px;
  color: white;
  text-decoration: none;
  text-align: center;
  font-size: 18px;
  border-radius: 30px;
  background-color: ${colors.primary};
`

function Home() {
  return (
    <HomeWrapper>
      <HomeTextWrapper>
        <h1>
          Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents
        </h1>
        <StyledLink to="/survey/1">Faire le test</StyledLink>
      </HomeTextWrapper>
      <img src={HomeIllustration} alt="" />
    </HomeWrapper>
  )
}

export default Home
