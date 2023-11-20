import React from 'react'
import { render, screen } from '@testing-library/react'
import { Component as NoMatch } from './noMatch'

test('renders text', () => {
  render(<NoMatch />)
  const linkElement = screen.getByText(/Something went wrong\./i)
  expect(linkElement).toBeInTheDocument()
})
