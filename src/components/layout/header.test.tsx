import React from 'react'
import { render, screen } from '@testing-library/react'
import { Component as Header } from './header'
import { MemoryRouter } from 'react-router-dom'

test('renders header', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  )
  const linkElement = screen.getByText(/Keep Learning/i)
  expect(linkElement).toBeInTheDocument()
})
