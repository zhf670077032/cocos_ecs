import OnePage from "./OnePage";
import RedDotMgr from "./RedDot/RedDotMgr";
import EventMgr from "./base/EventMgr";
import { GameMessageDefine } from "./define/GameMessageDefine";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MainScene extends cc.Component {

    @property(cc.Layout)
    layout: cc.Layout = null;

    @property(cc.Prefab)
    onePagePrefab : cc.Prefab = null

    @property(cc.Prefab)
    redDotPrefab : cc.Prefab = null

    @property(cc.Label)
    tipLabel: cc.Label = null;

    @property(cc.Label)
    nowSelectLabel: cc.Label = null;

    @property(cc.Node)
    btnNode: cc.Node = null;

    nowSelect : string = null

    protected onLoad(): void {
        RedDotMgr.prefab = this.redDotPrefab
        this.showRedDotPage(RedDotMgr.nodeRoot.name)
        EventMgr.on(GameMessageDefine.EVENT_CLICK_ONE_NODE, this.clickShow, this)
        // this.btnNode.on(cc.Node.EventType.TOUCH_END, this.test, this)
        window["main"] = this
    }

    showRedDotPage(dotName : string){
        let redDot = RedDotMgr.getNodeByName(dotName)
        this.tipLabel.string = ""
        if (!redDot){
            this.tipLabel.string = "没找到节点"
            return
        }
        let oldSelectDot = RedDotMgr.getNodeByName(this.nowSelect)
        this.nowSelect = dotName
        this.nowSelectLabel.string = "当前选中：" + dotName
        if(redDot.children.size <= 0){
            this.tipLabel.string = "没有子节点"
            return
        }

        let oldDepth = oldSelectDot ? oldSelectDot.getDepth() : -100
        let nowDepth = redDot.getDepth()
        if (nowDepth != oldDepth + 1) {
            for (let i = this.layout.node.childrenCount; i >= nowDepth; i--) {
                this.layout.node.removeChild(this.layout.node.children[i])
            }
        }

        let newPage = cc.instantiate(this.onePagePrefab)
        newPage.getComponent(OnePage).setDotName(dotName)
        this.layout.node.addChild(newPage)
    }

    clickShow(msgName : string, dotName : string){
        this.showRedDotPage(dotName)
    }
}
/**


    具体实现是通过静态配置， 或者动态生成配置创建红点树，并且设置所有叶子结点的计算函数， 
1、返回值有两个，一个是show, 一个是count，
2、所有非叶子结点等于子结点计数之和
3、红点刷新通过调用 reCalculate 方法实现， 内部封装好事件了， 只有RedDotComponent这个组件能接收到

 */