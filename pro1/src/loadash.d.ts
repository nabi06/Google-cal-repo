declare module "loadash"{
    function time(num:number):number[]
}
declare global {
interface Console {
superLog:() =>
void
}
}
export {}