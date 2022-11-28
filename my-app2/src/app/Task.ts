export interface Task{
    //question mark means its optional
    id?:number;
    text:string;
    day:string;
    reminder: boolean;
}