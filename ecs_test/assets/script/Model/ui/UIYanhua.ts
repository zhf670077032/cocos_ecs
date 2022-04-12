import UIBase from "../../base/ui/UIBase";

const {ccclass, property} = cc._decorator;

@ccclass
class AutoUI_Yanhua extends cc.Component {

   @property(cc.Node)
   testNode  : cc.Node = null

   viewCom : UIYanhua = null
}


export default class UIYanhua extends UIBase<AutoUI_Yanhua>{
    protected static prefabName = "UIYanhua"
    
    
}