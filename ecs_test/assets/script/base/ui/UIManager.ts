import UIYanhua from "../../Model/ui/UIYanhua";
import UIBase, { UIClass } from "./UIBase";



export default class UIManager{

    static openUI<AutoUI extends cc.Component, T extends UIBase<AutoUI>>(uiClass : UIClass<AutoUI, T>){
        // let prefabName = uiClass
        var s = import("../../Model/ui/UIYanhua")
    }

}



UIManager.openUI(UIYanhua)