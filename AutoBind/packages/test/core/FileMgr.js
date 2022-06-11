'use strict';

const fs = require('fire-fs');
const adb = Editor.assetdb;
const projectPath = Editor.Project.path;
const path = require('fire-path');

// 根路径
let assetsRoot = "assets"
// 配置导出路径
let export_folder = "auto"



let mkdirs = function (filepath) {
    let list = filepath.split("/")
    if (list.length > 0){
        let folder = path.join(projectPath, assetsRoot);
        for (let i = 0; i < list.length - 1; i++) {
            folder = path.join(folder, list[i]);
            if (!fs.existsSync(folder)) {
                fs.mkdirsSync(folder);
            }
        }
    }
}


let writeFile = function (filepath, content, isCover) {
    mkdirs(filepath)
    let exists = adb.exists || adb.remote.exists
    let filename = `db://${assetsRoot}/${filepath}`
    if (!isCover && exists(filename)){ // 不覆盖时， 如果文件存在
        Editor.warn(`文件${filename}已存在`);
    } else {
        adb.createOrSave(filename, content)
    }
}

// 文件是不是需要修改
let fileNeedModify = function (filepath, content) {
    mkdirs(filepath)
    let exists = adb.exists || adb.remote.exists
    let filename = `db://${assetsRoot}/${filepath}`
    if (exists(filename)){
        let all_path = `${projectPath}/${assetsRoot}/${filepath}`
        let old_content = fs.readFileSync(all_path)
        return old_content != content
    }
    return true
}

module.exports = {
    export_folder : export_folder,
    writeFile : writeFile,
    fileNeedModify : fileNeedModify
}