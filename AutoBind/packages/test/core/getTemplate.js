'use strict';

const getNodeMap = require('./getNodeMap');


let export_template = `
export default class UINAME{
NODE_PROPERTY_LIST

EXTRA_PROPERTY_LIST
    constructor(nodeList : cc.Node[]){
INIT_NODE_LIST

INIT_EXTRA_NODE_LIST
    }
}
`

let node_property_template          = `\tNODE_NAME: cc.Node = null;`
let node_property_init_template     = `\t\tthis.NODE_NAME = nodeList[INDEX];`
let extra_property_template         = `\tPROPERTY_NAME: PROPERTY_TYPE = null;`
let extra_property_init_template    = `\t\tthis.PROPERTY_NAME = this.NODE_NAME.getComponent(PROPERTY_TYPE);`


let getNodeList = function(object){
    let list = []
    for (let key in object) {
        list.push(object[key])
    }
    list.sort((a,b) => {
        return a.index - b.index
    })
    return list
}


let getNodeProperties = function(nodeList) {
    let list = []
    let init_list = []
    nodeList.forEach(v => {
        list.push(node_property_template.replace(/NODE_NAME/g, v.name))
        let str = node_property_init_template.replace(/NODE_NAME/g, v.name)
        str = str.replace(/INDEX/g, v.index)
        init_list.push(str)
    })
    Editor.log(list)
    Editor.log(list.join("\n"))
    Editor.log(init_list.join("\n"))
    return [list.join("\n"), init_list.join("\n")]
}

let hasExtraProperty = function(nodeList){
    for (let index = 0; index < nodeList.length; index++) {
        if(nodeList[index].value > 0){
            return true
        }
    }
    return false
}

let getExtraProperties = function(nodeList) {
    if(!hasExtraProperty(nodeList)){
        return "", ""
    }

    let extra_list = []
    let extra_init_list = []

    nodeList.forEach(element => {
        let node_name = element.name
        for (let type_key in getNodeMap.exportConfig) {
            let cfg = getNodeMap.exportConfig[type_key]
            if(cfg.hex & element.value >= 1){
                let str = extra_property_template.replace(/PROPERTY_TYPE/g, type_key);
                str = str.replace(/PROPERTY_NAME/g, `${node_name}_${cfg.suffix}`)
                extra_list.push(str)

                str = extra_property_init_template.replace(/PROPERTY_TYPE/g, type_key);
                str = str.replace(/NODE_NAME/g, node_name);
                str = str.replace(/PROPERTY_NAME/g, `${node_name}_${cfg.suffix}`);
                extra_init_list.push(str)
            }
        }
    })
    // for (let node_name in object) {
    //     let element = object[node_name];
    //     for (let type_key in getNodeMap.exportConfig) {
    //         let cfg = getNodeMap.exportConfig[type_key]
    //         if(cfg.hex & element.value >= 1){
    //             let str = extra_property_template.replace(/PROPERTY_TYPE/g, type_key);
    //             str = str.replace(/PROPERTY_NAME/g, `${node_name}_${cfg.suffix}`)
    //             extra_list.push(str)

    //             str = extra_property_init_template.replace(/PROPERTY_TYPE/g, type_key);
    //             str = str.replace(/NODE_NAME/g, node_name);
    //             str = str.replace(/PROPERTY_NAME/g, `${node_name}_${cfg.suffix}`);
    //             extra_init_list.push(str)
    //         }
    //     }
    // }
    return [extra_list.join("\n"), extra_init_list.join("\n")]
}


let Main = function(object, uiname){
    let nodeList = getNodeList(object)
    let [list, init_list] = getNodeProperties(nodeList)
    let [extra_list, extra_init_list] = getExtraProperties(nodeList)
    let export_str = export_template.replace(/UINAME/g, uiname)
    export_str = export_str.replace(/NODE_PROPERTY_LIST/g, list)
    export_str = export_str.replace(/EXTRA_PROPERTY_LIST/g, extra_list)
    export_str = export_str.replace(/INIT_NODE_LIST/g, init_list)
    export_str = export_str.replace(/INIT_EXTRA_NODE_LIST/g, extra_init_list)
    return export_str
}


module.exports = {
    
    run : Main,

    // exportConfig :exportConfig
}