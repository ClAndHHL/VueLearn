<template>
<div>
    <el-row>
        <el-tabs  type="border-card" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
    </el-row>
    <el-row>
         <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
            <el-radio-button label="top" >top</el-radio-button>
            <el-radio-button label="right">right</el-radio-button>
            <el-radio-button label="bottom">bottom</el-radio-button>
            <el-radio-button label="left">left</el-radio-button>
        </el-radio-group>

        <el-tabs :tab-position="tabPosition" style="height: 200px;">
            <el-tab-pane label="用户管理">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
    </el-row>
    <el-row>
        <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
        <el-tab-pane
            :key="item.name"
            v-for="(item,index) in editableTabs"
            :label="item.title"
            :name="item.name"
        >
            {{item.content}}---{{index}}
        </el-tab-pane>
        </el-tabs>
    </el-row>

    <el-row>
        <el-button
            size="small"
            @click="addTab(editableTabsValue)"
        >
            add tab
        </el-button>
    </el-row>
</div>
</template>

<script>
export default {
    data() {
      return {
        activeName: 'second',
        tabPosition: 'top',

        editableTabsValue: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2,


      };
    },
    methods: {
    handleClick(tab, event) {
    console.log(tab, event);
    },

    handleTabsEdit(targetName, action) {
        if (action === 'add') {
            let newTabName = ++this.tabIndex + '';
            this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
            });
            this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
            let tabs = this.editableTabs;
            let activeName = this.editableTabsValue;
            if (activeName === targetName) {
                tabs.forEach((tab, index) => {
                    if (tab.name === targetName) {
                    let nextTab = tabs[index + 1] || tabs[index - 1];
                    if (nextTab) {
                        activeName = nextTab.name;
                    }
                    }
                });
            }
            
            this.editableTabsValue = activeName;
            this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
    },
    addTab(targetName) {
        console.log(targetName);
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
        });
        this.editableTabsValue = newTabName;
    },

}
}
</script>

<style scoped>

</style>


