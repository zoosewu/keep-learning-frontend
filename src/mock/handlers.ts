import { type HttpHandler, HttpResponse, http } from 'msw'
import { category, content, subject } from './mockData'
import type { InitialType } from '@/components/type'

function CreateAPI<T extends InitialType> (key: string, defaultValues: T[]): HttpHandler[] {
  const apiPrefix = '/api/v1/'

  const apiGet = http.get(apiPrefix + key, () => (HttpResponse.json(Array.from(defaultValues.values()))))

  const apiPost = http.post(apiPrefix + key, async ({ request }) => {
    const newItem = await request.json() as T
    defaultValues.push(newItem)
    return HttpResponse.json(newItem, { status: 201 })
  })

  const apiDelete = http.delete(apiPrefix + key + '/:id', ({ params }) => {
    const { id } = params
    const items = defaultValues.filter((item) => { return item.Id.toString() === id })
    const deletedPost = items.length > 0
    if (!deletedPost) {
      return new HttpResponse(null, { status: 404 })
    }
    defaultValues.splice(defaultValues.indexOf(items[0]), 1)
    return HttpResponse.json(deletedPost)
  })

  return [apiGet, apiPost, apiDelete]
}
export const handlers = [
  ...CreateAPI('category', category),
  ...CreateAPI('subject', subject),
  ...CreateAPI('content', content)
]
