const getTemplate = require('./getTemplate');
const FileMgr = require('./FileMgr')

let exportMain = function(value) {
    let export_name = `auto_${value.name}`
    Editor.Scene.callSceneScript('auto-bind', 'needModify_Assign', value.uuid, export_name, function (needModify, needAssign, object) {
        // Editor.log(needModify, needAssign, JSON.stringify(object))
        if (needModify) {
            let filename = `${FileMgr.export_folder}/${export_name}.ts`
            FileMgr.writeFile(filename, getTemplate.run(object, export_name), true)
            Editor.log("导出成功")
        } else {
            if (needAssign) {
                Editor.Scene.callSceneScript('auto-bind', 'addComponent', value.uuid, export_name);
                Editor.log("绑定成功")
            }
        }
        Editor.Scene.callSceneScript('auto-bind', 'clearEmpty', value.uuid);
    });
}

let addNullNode = function (value) {
    Editor.Scene.callSceneScript('auto-bind', 'addNullNode', value.uuid);
}


module.exports = {
    run : exportMain,
    addNullNode : addNullNode
}