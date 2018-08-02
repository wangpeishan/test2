<template>
<div class="app-container calendar-list-container">
  <div class="app-container calendar-list-container">
     <!--- this is my components-->
    <!-- <hm-tab :schema="schema['CcHmUser']"></hm-tab> -->
    <hm-tabs-table :schema="schema['HmUser']" :tabTitles="tabTitles" tabTypes="type"></hm-tabs-table>
  </div>
</div>
</template>

<script>
  import HmTab from './HmTabsTable.vue'
  import schema from '../../haomo/schemas/hm_org_schema'
  export default {
    name: 'HmTabsTableIndex',
    // 继承其他组件
    extends: {},
    // 使用其它组件
    components: {
      'hm-tabs-table': HmTab
    },
    data() {
      return {
        // 传递标签页标题
        tabTitles: [
          { name: '组织结构', type: '0' },
          { name: '自定义字段', type: '1' }
        ]
      }
    },
    computed: {
    },
    filters: {
    },
    created() {
      this.schema = schema
    },
    methods: {}
  }
</script>
<style scoped>
</style>
