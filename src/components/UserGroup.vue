<template>
  <nav class="ug-wrap">
      <li class="ug-wrap-item" v-for="(el,index) in list" :key="index">
          <div class="ug-wrap-item-text" @click="toggle(el)">
              <Icon type="chevron-right" v-show="!el.expand"></Icon>
              <Icon type="chevron-down" v-show="el.expand"></Icon>
              <span class="ug-wrap-item-text-text">{{el.label}}</span>
              <span class="ug-wrap-item-count">({{el.children ? el.children.length : 0 }})</span>
          </div>
          <nav class="ug-wrap-ch" v-if="el.children" v-show="el.expand">
              <li class="ug-wrap-chi" v-for="(el2,index2) in el.children" :key="index2">
                  <div class="ug-user-list-item">
                      <div class="ug-user-list-item-left">
                          <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                      </div>
                      <div class="ug-user-list-item-right">
                            <dl>
                                <dt>{{el2.label}}</dt>
                                <dd class="text-muted">{{el2.desc}}</dd>
                            </dl>                            
                      </div>
                  </div>
              </li>
          </nav>
      </li>
  </nav>
</template>
<script>
export default {
    name: 'UserGroup',
    data () {
        return {
            list: []
        }
    },
    props: {
        data: {
            type: Array,
            default () {
                return []
            }
        }
    },
    methods: {
        toggle (el) {
            el.expand = !el.expand;
        },
        init () {
            let arr = JSON.parse(JSON.stringify(this.data));
            arr.forEach(e=>{
                e.expand = false;
            })
            this.list = arr;            
        }
    },
    mounted () {
        this.init();
    },
    watch: {
        data () {
            this.init();
        }
    }
}
</script>
<style lang="less">
    .ug-wrap{
        padding: 15px 0;
        font-size: 14px;
        li{
            list-style: none;
        }
        .ug-wrap-item + .ug-wrap-item{
            margin-top: 10px;
        }
        .ug-wrap-item-text{
            i{
                width: 14px;
                height: 14px;
                display: inline-block;
                margin-left: 15px;
            }
        }
        .ug-wrap-ch{
            padding: 10px 0;
            .ug-wrap-chi{
                width: 100%;
                &:hover{
                    background-color: #ddd;
                }                
            }
            .ug-user-list-item{
                width: 100%;
                position: relative;
                padding-left: 65px;
                box-sizing: border-box;
                height: 60px;
                .ug-user-list-item-left{
                    width: 50px;
                    height: 50px;
                    left: 15px;
                    top: 12px;
                    position: absolute;
                }
                .ug-user-list-item-right{
                    width: 100%;
                    dt{
                        height: 30px;
                        line-height: 30px;
                    }
                }
            }
        }
    }
    .text-muted{
        color: #999;
        font-size: 12px;
    }
</style>


