
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    material : cc.Material = null;
    time : number = 0;
    start () {
        // this.material = this.node.getComponent(cc.Sprite).getMaterial(0)
// 
        let sprite = this.node.getComponent(cc.Sprite)

        // cc.assetManager.resources.load("flowmap", (err, res : cc.Texture2D) => {
        //     console.error(err, res)

        //     let frame = new cc.SpriteFrame(res)
        //     frame.vertices = {
        //         x: [0, 100, 100],
        //         y: [0, 0, 100],
        //         nu: [0, 1, 1],
        //         nv: [0, 0, 1], 
        //         triangles: [0, 1, 2],
        //     }
        //     sprite.spriteFrame = frame
        //     sprite.setVertsDirty();
        // })
        

    }

    // update (dt) {
    //     this.node.active = true
    //     // this.time += dt;

    //     // this.material.setProperty("time", this.time)
    // }
}
