
export default class auto_UITest{
	NODE1: cc.Node = null;
	NODE2: cc.Node = null;
	NODE3: cc.Node = null;

	NODE1_Label: cc.Label = null;
    constructor(nodeList : cc.Node[]){
		this.NODE1 = nodeList[0];
		this.NODE2 = nodeList[1];
		this.NODE3 = nodeList[2];

		this.NODE1_Label = this.NODE1.getComponent(cc.Label);
    }
}
