import { GameMessageDefine } from "../define/GameMessageDefine"

/** 红点计算函数的类型 */
export type RedDotCalculateFunc = (param ?: any) => [boolean, number]

/** 红点配置项结构体 */
export interface RedDotConfigItem {
    parent       : string                // 父结点名称，为空时父结点设置为根结点
    func         ?: RedDotCalculateFunc  // 计算函数
    param        ?: any                  // 计算函数参数
    msgName     ?: string | string[]     // 消息名称列表
    /** preCondition 不能配置有父结点的结点，防止嵌套
     * 前置条件, 配置结点名称即可
     * 有配置时: 只有前置条件为true时才会计算, 为false时不计算
     * 无配置时: 为null时不影响计算,
     */
    preCondition?: string | string[]
}

export type RedDotConfigTable = {[key : string] : RedDotConfigItem}

/** 红点的静态配置 */
let RedDotStaticConfig : RedDotConfigTable = {
     node1     : {parent : null}
    ,node1_1   : {parent : "node1"}
    ,node1_2   : {parent : "node1"}
    ,node1_3   : {parent : "node1"}
    ,node1_4   : {parent : "node1"}

    ,node1_1_1 : {parent : "node1_1"}
    ,node1_1_2 : {parent : "node1_1"}
    ,node1_1_3 : {parent : "node1_1"}

    ,node1_3_1 : {parent : "node1_3"}
    ,node1_3_2 : {parent : "node1_3"}

    ,node2     : {parent : null}
    ,node2_1   : {parent : "node2"}
    ,node2_2   : {parent : "node2"}
    ,node2_3   : {parent : "node2"}

    ,node2_2_1 : {parent : "node2_2"}
    ,node2_2_2 : {parent : "node2_2"}
}

export default RedDotStaticConfig