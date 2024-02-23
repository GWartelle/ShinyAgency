import Card from '.'
import { screen, render, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'

describe('The Card component', () => {
  it('Should have a picture and a title', async () => {
    render(
      <ThemeProvider>
        <Card
          title="Anakin Screenwalker"
          label="The last React Jedi"
          picture="testPicture.png"
        />
      </ThemeProvider>,
    )
    const cardPicture = screen.getByRole('img')
    const cardTitle = screen.getByText(/Anakin/i)
    expect(cardPicture.src).toBe('http://localhost/testPicture.png')
    expect(cardTitle.textContent).toBe(' Anakin Screenwalker ')
  })
  it('Should add a start around title', async () => {
    render(
      <ThemeProvider>
        <Card
          title="Anakin Screenwalker"
          label="The last React Jedi"
          picture="testPicture.png"
        />
      </ThemeProvider>,
    )
    const cardTitle = screen.getByText(/Anakin/i)
    const parentNode = cardTitle.closest('div')
    fireEvent.click(parentNode)
    expect(cardTitle.textContent).toBe('⭐️ Anakin Screenwalker ⭐️')
  })
})
