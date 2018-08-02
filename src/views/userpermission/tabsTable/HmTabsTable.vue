<template>
  <el-tabs v-model="activeName" @tab-click="handleClick"  type="card">
    <el-tab-pane :label="item.name" :name="item.type + ''" v-for="item in tabTitles">
      <div style="float: left;">
        <p>鸿合科技</p>
        <div v-for="items in arrs">
          <p @click="items.flag = !items.flag">{{items.title}}</p>
          <ul v-if="items.flag">
            <li v-for="it in items.li">
              {{it.text}}
            </li>
          </ul>
        </div>

      </div>
      <div style="float: right;">
      </div>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
  import request from '@/utils/request'
  import _ from 'lodash'

  export default {
    name: 'HmTabsTable',
    extends: {},
    components: {},
    mixins: [],
    props: {
      schema: {
        type: Object,
        require: true
      },
      tabTypes: {
        type: String,
        require: true
      },
      tabTitles: {
        type: Array,
        require: true
      }
    },
    data() {
      return {
        activeName: '',
        dataList: [],
        arrs: [{ title: '鸿合科技-信息部', flag: true, li: [{ text: '鸿合科技信息部' }, { text: '信息部' }] }, { title: '鸿合科技-财务部', flag: true, li: [{ text: '鸿合科技财务部' }] }]
      }
    },
    methods: {
      taps(flags) {
        this.flags = !this.flags
      },
      handleClick(tab, event) {
      },
      getList() {
        const self = this
        request(self.schema.modelUnderscorePlural, {
          params: {}
        }).then(resp => {
          self.dataList['0'] = []
          self.dataList['1'] = []
          self.dataList['2'] = []
          self.dataList['3'] = []
          self.dataList['4'] = []
          _.each(resp.data, (item, index) => {
            switch (item[self.tabTypes]) {
              case 0:
                self.dataList['0'].push(item)
                break
              case 1:
                self.dataList['1'].push(item)
                break
              case 2:
                self.dataList['2'].push(item)
                break
              case 3:
                self.dataList['3'].push(item)
                break
              case 4:
                self.dataList['4'].push(item)
                break
            }
          })
          self.activeNames = '0'
          console.log(self.dataList[0])
          console.log(self.dataList[1])
        })
      }
    },
    created() {
      this.getList()
    }
  }
</script>
