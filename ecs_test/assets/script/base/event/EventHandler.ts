import { getInstance, Singleton } from "../singleton/Singleton";
import DistributeObject from "./DistributeObject";
import EventType from "./EventType";

/**
 * 事件管理器
 * @example
 * 1、发布事件
 * getInstance(EventHandler).Publish(EventType.TestKey)
 * 
 * 2、注册事件，使用装饰器形式
EventRegister(EventType.TestKey)
class test extends DistributeObject{
    Run(zone: any, ...agrs: any[]) {
        
    }
}
 */
@Singleton
export default class EventHandler{

    allEvent : Map<string, Array<DistributeObject>> = new Map()

    Register(event_type : EventType, aEvent : DistributeObject){
        if(!event_type) return

        let list = this.allEvent.get(event_type)
        if(!list){
            list = new Array()
            this.allEvent.set(event_type, list)
        }
        list.push(aEvent)
    }

    Publish(event_type : EventType, ...args : any[]){
        let list = this.allEvent.get(event_type)
        if(!list || list.length <= 0){
            return
        }

        list.forEach(ele => ele.TryRun(...args))
    }
}

/**
 * 事件注册装饰器
 * @param event_type 事件类型枚举
 * @returns 
 */
export function EventRegister(event_type : EventType){
    return function(targetClass : any){
        getInstance(EventHandler).Register(event_type, new targetClass())
    }
}