import React from 'react'
import { render, screen } from '@testing-library/react'
import { Component as Main } from './main'
import { RouteObject, RouterProvider, createHashRouter, Link } from 'react-router-dom'
import type { Router } from '@remix-run/router'
import { ContainerRouter } from '@/containerRouter'
import userEvent from '@testing-library/user-event'
const FakeComponent: React.FC = () => (<div>fake text</div>)
const FakeComponent2: React.FC = () => (<div>fake2 text</div>)
const fakeChildRouter: ContainerRouter[] = [
  {
    index: true,
    element: <FakeComponent />
  },
  {
    path: 'FakeComponent',
    label: 'FakeComponent',
    element: <FakeComponent />
  },
  {
    path: 'FakeComponent2',
    label: 'FakeComponent2',
    element: <FakeComponent2 />
  }
]
const MainWithLink: React.FC = () => (
  <div>
    <Link className='index' to='/' />
    <Link className='fake' to='/FakeComponent' />
    <Link className='fake2' to='/FakeComponent2' />
    <Main />
  </div>)
const fakeRouter: Router = createHashRouter([
  {
    path: '/',
    element: <MainWithLink />,
    children: fakeChildRouter
  }
] as RouteObject[])
describe('test main', () => {
  test('render fakeComponent', () => {
    render(
      <RouterProvider
        router={fakeRouter}
        fallbackElement={<p>Loading...</p>}
      />
    )
    expect(screen.getByText(/fake text/i)).toBeInTheDocument()
  })
  test('test fake router', async () => {
    const { container } = render(
      <RouterProvider router={fakeRouter} fallbackElement={<p>Loading...</p>} />
    )
    const user = userEvent.setup()

    expect(screen.getByText(/fake text/i)).toBeInTheDocument()

    const index = container.querySelector('.index')
    const fake = container.querySelector('.fake')
    const fake2 = container.querySelector('.fake2')

    if (fake2 !== null) { await user.click(fake2) }
    expect(screen.getByText(/fake2 text/i)).toBeInTheDocument()

    if (fake !== null) { await user.click(fake) }
    expect(screen.getByText(/fake text/i)).toBeInTheDocument()

    if (fake2 !== null) { await user.click(fake2) }
    expect(screen.getByText(/fake2 text/i)).toBeInTheDocument()

    if (index !== null) { await user.click(index) }
    expect(screen.getByText(/fake text/i)).toBeInTheDocument()
  })
})
