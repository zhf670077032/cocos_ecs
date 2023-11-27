'use strict';
const getNodeMap = require('./getNodeMap');
const FileMgr = require('./FileMgr')
const getTemplate = require('./getTemplate');


module.exports = {
    
    "addComponent" : (event, uuid, componentName) => {
        let node = cc.engine.getInstanceById(uuid)
        let com = node.getComponent(componentName) || node.addComponent(componentName)
        let collector = node.getComponent("ReferenceCollector");
        let object = getNodeMap.run(node)
        for (const key in object) {
            let v = object[key]
            com[key] = collector.nodeList[v.index]
        }
    },
    // 看是不是需要导出或者赋值
    "needModify_Assign" : (event, uuid, root, componentName) => {
        let node = cc.engine.getInstanceById(uuid)
        let object = getNodeMap.run(node)
        let content = getTemplate.run(object, componentName)
        let filename = FileMgr.getExportFilename(root, componentName)
        let collector = node.getComponent("ReferenceCollector");
        collector.auto_name = filename.replace(".ts", "")
        if (FileMgr.fileNeedModify(filename, content)){
            event.reply(true, true, object);
        } else {
            event.reply(false, true, object);
        }
    },

    "clearEmpty" : (event, uuid) => {
        let node = cc.engine.getInstanceById(uuid)
        let collector = node.getComponent("ReferenceCollector");
        if (collector) {
            let nodeList = collector.nodeList
            let list = []
            for (let index = 0; index < nodeList.length; index++) {
                let node = nodeList[index]
                if (node) {
                    list.push(node)
                }
            }
            collector.nodeList = list
        }
    },

    "addNullNode" : (event, uuid) => {
        let node = cc.engine.getInstanceById(uuid)
        let collector = node.getComponent("ReferenceCollector");
        if (collector) {
            let nodeList = collector.nodeList
            nodeList.length += 5
        }
    },

    "pushNode" : (event, uuid, nodeName, nodeUuid) => {
        let node = cc.engine.getInstanceById(uuid)
        let collector = node.getComponent("ReferenceCollector");
        collector.nodeMap[nodeName] = cc.engine.getInstanceById(nodeUuid)
        for (const key in collector.nodeMap) {
            Editor.log(key)
        }
        event.reply()
    }
}