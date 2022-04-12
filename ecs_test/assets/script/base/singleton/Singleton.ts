
/**
 * 用闭包的形式来定义函数类型
 * @type {function}
 * 
 * @example 
SingleTon
class per{
    a = 1
}
 */
export function Singleton(cls : any){
    cls.prototype.constructor.instance = new cls()
}

interface singletonClass<T>{
    new() : T
}

/**
 * 单例类型获取
 * @example
 * getInstance(EventHandler)
 */
export function getInstance<T>(cls : singletonClass<T>) : T{
    return cls.prototype.constructor.instance
}