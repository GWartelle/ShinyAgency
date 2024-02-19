import Card from '../../components/Card'
import styled from 'styled-components'

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
`

const TextContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 50px;
`

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
  },
]

function Freelances() {
  return (
    <div>
      <TextContainer>
        <h1>Trouvez votre prestataire</h1>
        <h3>Chez Shiny nous réunissons les meilleurs profils pour vous.</h3>
      </TextContainer>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </div>
  )
}

export default Freelances
