import ReferenceCollector from "./ReferenceCollector";

interface uiclass<T>{
    new(nodeList) : T
}

export default abstract class UIBase<T>{
    autoClass : uiclass<T> = null
    viewComp : T = null
    collector : ReferenceCollector = null

    constructor(collector : ReferenceCollector){
        this.collector = collector
        if(this.autoClass){
            this.viewComp = new this.autoClass(this.collector.nodeList)
        } else {

        }
    }
}
