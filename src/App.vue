<template>
  <div class="win-wrap">
      <im-win :position="{right:0,bottom:0,height: '500px'}" :drag="false">  
          <div slot="header" style="height:120px">
              <div class="win-window-title">
                <Row style="padding-top:5px">
                  <Col :span="12">
                    <Dropdown :transfer="true" trigger="click" placement="bottom-start">
                        <a href="javascript:void(0)">
                            阿正
                            <Icon type="ios-cog" color="#19be6b"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem><Icon type="ios-cog" color="#19be6b" style="margin-right:15px"></Icon>在线</DropdownItem>
                            <DropdownItem><Icon type="navicon" color="#f90" style="margin-right:15px"></Icon>隐身</DropdownItem>
                            <DropdownItem><Icon type="ios-minus" color="#ed3f14" style="margin-right:15px"></Icon>离开</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>                
                  </Col>
                  <Col :span="12" class="text-right">
                    <Icon class="wh-ico" type="ios-minus-empty" :size="20"></Icon>
                    <Icon class="wh-ico" type="arrow-expand" :size="20"></Icon>
                    <Icon class="wh-ico" type="ios-close-empty" style="transform:scale(1.5)" :size="20"></Icon>
                  </Col>
                </Row>
              </div> 
              <div class="text-elipse wh-qm">
                并不包含LayIM。如果你觉得Layui对你有所帮助，并且你希望Layui能够持续发展下去，那么我们很欢迎你能捐赠Layui，成为我们的VIP2+，这对我们的促进将会极大
              </div>              
              <Menu mode="horizontal" theme="light" :active-name="activeName" @on-select="tabChange">
                  <MenuItem name="1">
                      <Icon type="ios-person" :size="24"></Icon>
                  </MenuItem>
                  <MenuItem name="2">
                      <Icon type="ios-people" :size="24"></Icon>
                  </MenuItem>
                  <MenuItem name="3">
                      <Icon type="android-textsms" :size="24"></Icon>
                  </MenuItem>
              </Menu>                            
          </div> 
          <div slot="body">
              <UserGroup :data="users" v-if="activeName == 1"></UserGroup>
              <UserHistory :data="users[0].children" v-if="activeName == 3"></UserHistory>
              <Group :data="users" v-if="activeName == 2"></Group>
          </div> 
      </im-win>
      <im-win></im-win>
      <im-win></im-win>
  </div>
</template>

<script>
import ImWin from './components/ImWin'
import UserGroup from './components/UserGroup'
import UserHistory from './components/History'
import Group from './components/Group'
export default {
  name: 'App',
  data () {
    return {
      show: true,
      activeName: '1',
      users: [{
        label: '我的好友',
        children: [{
          label: '张三',
          desc: '手机号喀什假大空'
        },{
          label: '张三',
          desc: '手机号喀什假大空'          
        },{
          label: '张三',
          desc: '手机号喀什假大空'          
        }]
      },{
        label: '家人',
        children: [{
          label: '张三',
          desc: '手机号喀什假大空'
        },{
          label: '张三',
          desc: '手机号喀什假大空'          
        },{
          label: '张三',
          desc: '手机号喀什假大空'          
        }]
      }]    
    }
  },
  methods: {
    tabChange (name) {
      this.activeName = name;
    }
  },
  components: {
    ImWin,
    UserGroup,
    UserHistory,
    Group
  }
}
</script>

<style lang="less">
  .win-wrap{
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(97,163,243,.5) 0%,#ffffff 100%);
    position: relative;
    box-sizing: border-box;
    padding: 10px;  
    overflow: hidden;
    .ivu-menu-item{
      width: 33.333%;
      text-align: center;
    }
  } 
  .ivu-menu-horizontal{
    height: 30px;
    line-height: 30px;
    background: rgba(245, 247, 249, 1);
  }
  .ivu-dropdown a{
    color: #333;
  }
</style>
