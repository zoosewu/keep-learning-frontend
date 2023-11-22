import { rest } from 'msw'
import { user } from './mockData'
export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    const { username } = req.body
    return res(
      ctx.json({
        ...user,
        username
      })
    )
  })
]
