import type { CategoryType, ContentType, SubjectType } from '@/components/type'
export const category: CategoryType[] = [
  { Id: 1, Description: 'English' },
  { Id: 2, Description: '中文' },
  { Id: 3, Description: 'MathQ' },
  { Id: 4, Description: 'MathA' }
]
export const subject: SubjectType[] = [
  { Id: 1, Description: 'translation1' },
  { Id: 2, Description: 'translation2' },
  { Id: 3, Description: 'translation3' },
  { Id: 4, Description: 'MathQuestion' }
]
export const content: ContentType[] = [
  { Id: 1, Description: 'leave', SubjectId: 1, CategoryId: 1 },
  { Id: 2, Description: '離開', SubjectId: 1, CategoryId: 2 },
  { Id: 3, Description: 'head', SubjectId: 2, CategoryId: 1 },
  { Id: 4, Description: '頭', SubjectId: 2, CategoryId: 2 },
  { Id: 5, Description: 'left', SubjectId: 3, CategoryId: 1 },
  { Id: 6, Description: '左', SubjectId: 3, CategoryId: 2 },
  { Id: 7, Description: '+', SubjectId: 4, CategoryId: 3 },
  { Id: 8, Description: '加法', SubjectId: 4, CategoryId: 4 }
]
