
const { ccclass, property } = cc._decorator;

@ccclass
export default class auto_UITest extends cc.Component{
	@property(cc.Node)NODE1: cc.Node = null;
	@property(cc.Node)NODE2: cc.Node = null;
	@property(cc.Node)NODE3: cc.Node = null;


	NODE1_Label: cc.Label = null;
    onLoad(){
		this.NODE1_Label = this.NODE1.getComponent(cc.Label);
    }

}
