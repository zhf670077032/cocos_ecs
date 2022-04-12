
/**
 * 分发事件的基类：供调度器和事件管理器使用
 * 
 * 必须重写Run函数， 可以使用异步
 */
export default abstract class DistributeObject{

    /**
     * 事件或调度器底层调用，可以防止报错
     */
    TryRun(...args : any[]){
        try {
            this.Run(null, ...args)
        } catch (error) {

        }
    }

    /**
     * 有返回值的调用
     */
    TryReturnRun(...args : any[]){
        try {
            return this.Run(null, ...args)
        } catch (error) {

        }
    }
    abstract Run(zone : any, ...agrs : any[])
}