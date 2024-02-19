import styled from 'styled-components'
import Logo404 from '../../assets/404.svg'
import colors from '../../utils/style/colors'

const ErrorContainer = styled.div`
  background-color: ${colors.backgroundLight};
  display: flex;
  flex-direction: column;
  margin: 50px;
  align-items: center;
`

function Error() {
  return (
    <ErrorContainer>
      <h2>Oups...</h2>
      <img src={Logo404} alt="Logo erreur 404" />
      <h2>Il semblerait qu'il y ait un problème</h2>
    </ErrorContainer>
  )
}

export default Error
