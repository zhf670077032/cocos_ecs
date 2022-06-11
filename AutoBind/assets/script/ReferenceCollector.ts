const {ccclass, property, inspector, executeInEditMode, menu, help} = cc._decorator;

@ccclass
// @executeInEditMode
// @menu("i18n:MAIN_MENU.component.ui/Button")
// @help("i18n:COMPONENT.help_url.button")
@inspector("packages://auto-bind/auto-bind-inspector.js")
export default class ReferenceCollector extends cc.Component{
    
    @property([cc.Node])
    private nodeList: cc.Node[] = []
}