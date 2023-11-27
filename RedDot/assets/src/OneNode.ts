import EventMgr from "./base/EventMgr";
import { getInstance } from "./base/SingleFactory";
import { GameMessageDefine } from "./define/GameMessageDefine";
import RedDotMgr from "./RedDot/RedDotMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class OneNode extends cc.Component {

    @property(cc.Label)
    dotNameLabel: cc.Label = null;

    @property(cc.Sprite)
    sprite: cc.Sprite = null;

    dotName : string = null
    setDotName(dotName : string){
        this.dotName = dotName
        this.dotNameLabel.string = dotName
        RedDotMgr.createRedDot(this.node, this.dotName, 50, 30)
    }

    protected onLoad(): void {
        this.sprite.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this)
    }

    onClick(){
        EventMgr.emit(GameMessageDefine.EVENT_CLICK_ONE_NODE, this.dotName)
    }
}
