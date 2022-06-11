'use strict';

const getNodeMap = require('./getNodeMap');


let export_template = `
const { ccclass, property } = cc._decorator;

@ccclass
export default class UINAME extends cc.Component{
NODE_PROPERTY_LIST

EXTRA_PROPERTIES
}
`

let node_property_template = `\t@property(cc.Node)NODE_NAME: cc.Node = null;`
let extra_property_template = `\tPROPERTY_NAME: PROPERTY_TYPE = null;`
let onload_property_template = `\t\tthis.PROPERTY_NAME = this.NODE_NAME.getComponent(PROPERTY_TYPE);`
let onload_template = `
EXTRA_PROPERTY_LIST
    onLoad(){
ONLOAD_PROPERTY_LIST
    }
`

let getNodeProperties = function(object) {
    let list = []

    for (let key in object) {
        list.push(node_property_template.replace(/NODE_NAME/g, key))
    }

    // Editor.log(list.join("\n"))
    
    return list.join("\n")
}

let hasExtraProperty = function(object){
    for (let key in object) {
        if(object[key].value > 0){
            return true
        }
    }
    return false
}

let getExtraProperties = function(object) {
    if(!hasExtraProperty(object)){
        return ""
    }

    let porp_list = []
    let onload_list = []

    // Editor.log("porp_list.join")
    for (let node_name in object) {
        let element = object[node_name];
        for (let type_key in getNodeMap.exportConfig) {
            let cfg = getNodeMap.exportConfig[type_key]
            if(cfg.hex & element.value >= 1){
                let str = extra_property_template.replace(/PROPERTY_TYPE/g, type_key);
                str = str.replace(/PROPERTY_NAME/g, `${node_name}_${cfg.suffix}`)
                porp_list.push(str)

                str = onload_property_template.replace(/PROPERTY_TYPE/g, type_key);
                str = str.replace(/NODE_NAME/g, node_name);
                str = str.replace(/PROPERTY_NAME/g, `${node_name}_${cfg.suffix}`);
                onload_list.push(str)
            }
        }
    }
    // Editor.log(porp_list.join("\n"))

    let export_str = onload_template.replace(/EXTRA_PROPERTY_LIST/g, porp_list.join("\n"))
    export_str = export_str.replace(/ONLOAD_PROPERTY_LIST/g, onload_list.join("\n"))
    return export_str
}


let Main = function(object, uiname){
    let export_str = export_template.replace(/UINAME/g, uiname)
    export_str = export_str.replace(/NODE_PROPERTY_LIST/g, getNodeProperties(object))
    export_str = export_str.replace(/EXTRA_PROPERTIES/g, getExtraProperties(object))
    return export_str
}


module.exports = {
    
    run : Main,

    // exportConfig :exportConfig
}