export interface IUser{
    is: number,
    name: string,
    email: string,
    age: number
}

export interface IGlobalState{
    users: IUser[]
}