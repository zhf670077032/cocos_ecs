import UIYanhua from "../../Model/ui/UIYanhua/UIYanhua";
import UIBase, { UIClass } from "./UIBase";



export default class UIManager{

    static openUI<AutoUI extends cc.Component, T extends UIBase<AutoUI, any>>(uiClass : UIClass<AutoUI, T>){
        // let prefabName = uiClass
        var s = import("../../Model/ui/UIYanhua/UIYanhua")
    }

}



UIManager.openUI(UIYanhua)