export interface InitialType {
  Id: number
  Description: string
}
export interface CategoryType extends InitialType {
}
export interface SubjectType extends InitialType {
}
export interface ContentType extends InitialType {
  SubjectId: number
  CategoryId: number
}
