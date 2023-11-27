'use strict';

const exportConfig = {
    "cc.Label" : {suffix : "Label", hex : 0b1},
    "cc.Button" : {suffix : "Button", hex : 0b10},
    "cc.Sprite" : {suffix : "Sprite", hex : 0b100},
}

// 节点列表内是否有节点
let hasNode = function(collector) {
    if(!collector || collector.nodeList.length <= 0){
        return false
    }

    for (let index = 0; index < collector.nodeList.length; index++) {
        if(collector.nodeList[index]){
            return true
        }
    }
    return false
}

let getNodeMap = function(collector){
    let nodeList = collector.nodeList
    let object = {}

    for (let index = 0; index < nodeList.length; index++) {
        let node = nodeList[index];
        if (!node) {
            continue
        }
        let value = 0

        for (let key in exportConfig) {
            let component = node.getComponent(key)
            if(component){
                value |= exportConfig[key].hex
            }
        }
        
        if(!object[node.name]){
            object[node.name] = {
                value : value,
                index : index,
                name : node.name,
                uuid : node.uuid
            }
        } else {
            collector.nodeList[index] = null
            cc.log(`ReferenceCollector 重复, 位置${index}已自动清空`)
        }
    }

    return object
}

let Main = function(node) {
    let collector = node.getComponent("ReferenceCollector");

    if(!hasNode(collector)){
        return null
    }
    return getNodeMap(collector)
}


module.exports = {
    
    run : Main,

    exportConfig :exportConfig
}