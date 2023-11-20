import React from 'react'
import { render, screen } from '@testing-library/react'
import { Component as Layout } from './layout'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
describe('test layout', () => {
  const FakeComponent: React.FC = () => (<div>fake text</div>)
  test('renders FakeComponent', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<FakeComponent />} />
          </Route>
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText(/fake text/i)).toBeInTheDocument()
    const headerElement = container.querySelector('a.navbar-brand')
    expect(headerElement).toBeInTheDocument()
    const footerElement = screen.getByText(/All rights reserved\./i)
    expect(footerElement).toBeInTheDocument()
  })
})
