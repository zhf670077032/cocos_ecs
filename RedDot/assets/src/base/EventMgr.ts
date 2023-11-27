import { getInstance, singleClass } from "../base/SingleFactory";
import { GameMessageDefine } from "../define/GameMessageDefine";



@singleClass
class EventMgr{
    on = cc.director.on.bind(cc.director)
    off = cc.director.off.bind(cc.director)
    emit = function(key: string, arg1?: any, arg2?: any, arg3?: any, arg4?: any){
        cc.director.emit(key, key, arg1, arg2, arg3, arg4)
    }
}

export default getInstance(EventMgr)