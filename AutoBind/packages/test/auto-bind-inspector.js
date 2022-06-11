const exportMain = require('./core/exportMain');

Vue.component("auto-bind", {
    template: `
<cc-array-prop :target.sync="target.nodeList"></cc-array-prop>
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
</div>
  `,
    props: {
        target: {
            twoWay: true,
            type: Object,
        }
    },
    methods: {
        // 清理
        addNullNode() {
            exportMain.addNullNode(this.target.node.value)
        },

        // 一键导出
        output(){
            exportMain.run(this.target.node.value)
        }
    }
});