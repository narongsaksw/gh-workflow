/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import Home from '../app/page'

describe('Home', () => {
  it('renders a text', () => {
    render(<Home />)

    const text = screen.getByTestId("explore-next-playground-text").textContent

    expect(text).toBe("Explore the Next.js 13 playground.")
  })
})