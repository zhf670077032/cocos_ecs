// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

// @ccclass("DDD")
// export class DDD{
    
//     @property({displayName : "点", type : cc.Vec3})
//     point : cc.Vec3 = null

//     @property({displayName : "速度"})
//     speed : number = 1000
// }

@ccclass
export default class NewClass extends cc.Component {

    // @property({displayName : "每个阶段", type : DDD})
    // d : DDD = null
    
}