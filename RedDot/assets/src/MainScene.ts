import { getInstance } from "./base/SingleFactory";
import OnePage from "./OnePage";
import RedDotMgr from "./RedDot/RedDotMgr";
import { RedDotCalculateFunc } from "./RedDot/RedDotStaticConfig";

const {ccclass, property} = cc._decorator;


let testConfig = {
    child1_2    : 1 //
   ,child1_4    : 2 //

   ,child1_1_1  : 3 //
   ,child1_1_2  : 4 //
   ,child1_1_3  : 5 //

   ,child1_3_1  : 1 //
   ,child1_3_2  : 2 //

   ,child2_1    : 3 //
   ,child2_3    : 1 //

   ,child2_2_1  : 1 //
   ,child2_2_2  : 2 //
}

let testfunc : RedDotCalculateFunc = function(name : string){
    let num : number = testConfig[name] ? testConfig[name] : 0
    return [num > 0, num]
}

for (let dotName in testConfig) {
    let redDot = getInstance(RedDotMgr).getNodeByName(dotName)
    if (redDot) {
        redDot.setCalculateFunc(testfunc)
        redDot.setCalculateParam(dotName)
    }
}


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
        getInstance(RedDotMgr).prefab = this.redDotPrefab
        this.showRedDotPage(getInstance(RedDotMgr).nodeRoot.name)
        cc.director.on("test", this.clickShow, this)
        this.btnNode.on(cc.Node.EventType.TOUCH_END, this.test, this)
        // window["main"] = this
    }

    test(){
        if (testConfig[this.nowSelect]) {
            testConfig[this.nowSelect] ++
            getInstance(RedDotMgr).reCalculate(this.nowSelect)
        }
    }

    showRedDotPage(dotName : string){
        let redDot = getInstance(RedDotMgr).getNodeByName(dotName)
        this.tipLabel.string = ""
        if (!redDot){
            this.tipLabel.string = "没找到节点"
            return
        }
        let oldSelectDot = getInstance(RedDotMgr).getNodeByName(this.nowSelect)
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

    clickShow(dotName : string){
        this.showRedDotPage(dotName)
    }
}
/**


    具体实现是通过静态配置， 或者动态生成配置创建红点树，并且设置所有叶子结点的计算函数， 
1、返回值有两个，一个是show, 一个是count，
2、所有非叶子结点等于子结点计数之和
3、红点刷新通过调用 reCalculate 方法实现， 内部封装好事件了， 只有RedDotComponent这个组件能接收到

 */