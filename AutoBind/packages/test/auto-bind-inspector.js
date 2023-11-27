const exportMain = require('./core/exportMain');

{/* <cc-array-prop :target.sync="target.nodeList"></cc-array-prop>
<div class="horizontal layout end-justified" style="padding:5px 0;margin-bottom:5px;">
    <ui-button class="blue tiny"
        @confirm="addNullNode"
    >
        加5个
    </ui-button>
    <ui-button class="blue tiny"
        @confirm="output"
    >
        导出或绑定
    </ui-button>

    <ui-row name="Foo">
            <ui-input class="fill"></ui-input>
            <ui-checkbox></ui-checkbox>
        </ui-row>
        <ui-row name="Bar">
            <ui-input class="fill"></ui-input>
            <ui-checkbox></ui-checkbox>
        </ui-row>
</div> */}

Vue.component("auto-bind", {
    template: `
    <ui-prop name="auto_script..." v-prop="target.auto_name" readonly></ui-prop>
    <cc-array-prop :target.sync="target.nodeList"></cc-array-prop>
<div class="horizontal layout end-justified" style="padding:5px 0;margin-bottom:5px;">
    <ui-button class="blue tiny" @confirm="addNullNode">加5个</ui-button>
    <ui-button class="blue tiny" @confirm="output">导出</ui-button>
    
</div>
  `,
    props: {
        target: {
            twoWay: true,
            type: Object,
        }
    },
    methods: {
        // 加5个
        addNullNode() {
            Editor.log(Editor.url('packages://inspector/inspectors/comps/label.js'))
            exportMain.addNullNode(this.target.node.value)
        },

        add(event){
            // for (const key in event.target) {
            //     Editor.log(key)
            // }
            // let that = this.target
            // let nodeName = event.target.name
            // Editor.Scene.callSceneScript('auto-bind', 'pushNode', this.target.node.value.uuid, event.target.name, event.target.value, function (params) {
            //     Editor.log(JSON.stringify(that.nodeMap))
            //     Editor.log(that.nodeMap[nodeName])
            // });
        },

        // 一键导出
        output(){
            exportMain.run(this.target.node.value)
        }
    }
});