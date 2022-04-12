
export interface UIClass<AutoUI extends cc.Component, T extends UIBase<AutoUI>>{
    new() : T
}

export default abstract class UIBase<T extends cc.Component> {
    ui : T = null

    protected static prefabName = ""
    static getPrefabName(){ return this.prefabName; }

    private static async LoadUI(){
        let moudle = await import("../../Model/ui/UIYanhua")
        // moudle.default.LoadUI
        let uibase = new moudle.default()

        
    }
}


