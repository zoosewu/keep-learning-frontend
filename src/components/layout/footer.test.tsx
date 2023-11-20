import React from 'react'
import { render, screen } from '@testing-library/react'
import { Component as Footer } from './footer'

test('renders text', () => {
  render(<Footer />)
  const linkElement = screen.getByText(/All rights reserved\./i)
  expect(linkElement).toBeInTheDocument()
})
