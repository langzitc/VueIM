<template>
  <nav class="ug-wrap">
      <li class="ug-wrap-item">
          <nav class="ug-wrap-ch">
              <li class="ug-wrap-chi" v-for="(el2,index2) in data" :key="index2">
                  <div class="ug-user-list-item">
                      <div class="ug-user-list-item-left">
                          <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                      </div>
                      <div class="ug-user-list-item-right">
                            <dl>
                                <dt style="line-height:60px">{{el2.label}}</dt>
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
    props: {
        data: {
            type: Array,
            default () {
                return []
            }
        }
    }
}
</script>
<style lang="less">

</style>


