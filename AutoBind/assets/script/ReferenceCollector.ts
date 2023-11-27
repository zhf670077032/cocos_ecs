const {ccclass, property, inspector, executeInEditMode} = cc._decorator;

@ccclass
// @executeInEditMode
@inspector("packages://auto-bind/auto-bind-inspector.js")
export default class ReferenceCollector extends cc.Component{
    
    @property([cc.Node])
    nodeList: cc.Node[] = []

    @property
    scriptName = ""

    ui : any = null
    onLoad(){
        import("../" + this.scriptName).then(cls => {
            this.ui = new cls.default(this)
        }).catch(err => {
            console.error(err)
        })
    }
}