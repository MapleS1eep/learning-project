// 定义接口用于限制person对象的具体属性
export interface PersonInter {
  id: string,
  name: string,
  age: number,
  gender?:string
}
// 自定义类型
export type PersonType = Array<PersonInter>