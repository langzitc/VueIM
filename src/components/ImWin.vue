<template>
      <div class="win-window" v-x-drag="drag ? dragConfig : null" :style="positions">
        <div class="app-window-resize resize-top-left"></div>
        <div class="app-window-resize resize-top-right"></div>
        <div class="app-window-resize resize-bottom-left"></div>
        <div class="app-window-resize resize-bottom-right"></div>
        <div class="app-window-resize resize-top-border"></div>
        <div class="app-window-resize resize-right-border"></div>
        <div class="app-window-resize resize-bottom-border"></div>
        <div class="app-window-resize resize-left-border"></div>
        <div class="win-window-header">
            <slot name="header">
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
            </slot>
        </div>
        <div class="win-window-body">
          <slot name="body">
              <div class="win-window-bar">Drag Here</div>.            
          </slot>
        </div>
        <div class="win-window-footer text-center">
          <slot name="footer">
              <nav>
                <li><Icon :size="20" type="ios-search-strong"></Icon></li>
                <li><Icon :size="20" type="volume-medium"></Icon></li>
                <li><Icon :size="20" type="android-add-circle"></Icon></li>
                <li><Icon :size="20" type="tshirt"></Icon></li>
                <li><Icon :size="20"  type="ios-help-outline"></Icon></li>
              </nav>
          </slot>
        </div>
      </div>     
</template>
<script>
export default {
    name: 'im-win',
    props: {
        zindex: 1,
        position:{
          type: Object,
          default () {
            return {}
          }
        },
        drag: {
          type: Boolean,
          default: true
        }
    },
    computed: {
      positions () {
        let obj = {};
        Object.assign(obj,this.defaultStyle);
        Object.assign(obj,this.position);
        return obj;
      }
    },
    data () {
        return {
            defaultStyle: {
              width: "300px",
              height: "300px"              
            },
            dragConfig: {
            // Drag and drop configuration
                drag: {
                    // Whether to enable drag and drop
                    enable: true,
                    // Specify drag and drop handle element, support for one or more handles
                    handler: ['.win-window-title', '.win-window-bar'],
                    // Drag the different stages of className
                    class: {
                      start: 'win-drag-start',
                      move: 'win-drag-move',
                      done: 'win-drag-done',
                      main: 'win-drag'
                    },
                    // callback
                    callback: {
                      start: null,
                      move: null,
                      done: (style) => {
                          //console.log('drag done', style)
                      }
                    }
                },
                // Zoom configuration
                resize: {
                    // Whether to enable zooming
                    enable: true,
                    // Specify the zoom handle element to support one or more handles
                    handler: {
                      'top-left': '.resize-top-left',
                      'top-right': '.resize-top-right',
                      'bottom-left': '.resize-bottom-left',
                      'bottom-right': '.resize-bottom-right',
                      'top-border': '.resize-top-border',
                      'right-border': '.resize-right-border',
                      'bottom-border': '.resize-bottom-border',
                      'left-border': '.resize-left-border'
                    },
                    // Scaling different stages of className
                    class: {
                      start: 'win-resize-start',
                      move: 'win-resize-move',
                      done: 'win-resize-done',
                      main: 'win-resize'
                    },
                    // callback
                    callback: {
                      start: null,
                      move: null,
                      done: (style) => {
                          //console.log('resize done', style)
                      }
                    }
                }
            }              
        }
    }
}
</script>

<style lang="less">
  .win-window {
    position: absolute;
    width: 300px;
    height: 200px;
    border: 1px solid rgba(0, 0, 0, .1);
    background: #fff; 
    box-sizing: border-box;
    overflow: hidden;
    box-shadow: 0 0 25px 5px rgba(0,0,0,.2);
    .win-window-header {
      background: rgba(245, 247, 249, 1);
      cursor: default;
      min-height: 40px;
      height: auto;
      .win-window-title {
        height: 30px;
        line-height: 30px;        
        padding: 0 10px;
        text-align: left;
        cursor: default;
      }
    }
    .win-window-body {
      height: 380px;
      overflow: auto;
      .win-window-bar {
        padding: 10px;
        border: 1px solid rgba(0, 0, 0, .1);
        background: rgba(245, 247, 249, 1);
        cursor: default;
        &:hover {
          background: rgba(0, 0, 0, .1);
        }
      }
    }
  }
 
  .win-drag-start,
  .win-drag-move {
    transition: none;
    opacity: .7;
 
    .win-window-header {
      .win-window-title {
        cursor: move !important;
      }
    }
    .win-window-body {
      .win-window-bar {
        cursor: move !important;
      }
    }
  }
 
  .app-window-resize {
    width: 20px;
    height: 20px;
    position: absolute;
    background: transparent;
    &.resize-top-left {
      cursor: nw-resize;
      top: 0;
      left: 0;
    }
    &.resize-top-right {
      cursor: ne-resize;
      top: 0;
      right: 0;
    }
    &.resize-bottom-left {
      cursor: sw-resize;
      bottom: 0;
      left: 0;
    }
    &.resize-bottom-right {
      cursor: se-resize;
      bottom: 0;
      right: 0;
    }
    &.resize-top-border {
      cursor: ns-resize;
      top: 0;
      width: 100%;
      height: 2px;
    }
    &.resize-right-border {
      cursor: ew-resize;
      right: 0;
      width: 2px;
      height: 100%;
    }
    &.resize-bottom-border {
      cursor: ns-resize;
      bottom: 0;
      width: 100%;
      height: 2px;
    }
    &.resize-left-border {
      cursor: ew-resize;
      left: 0;
      width: 2px;
      height: 100%;
    }
  } 
  .wh-ico{
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
  }
  .text-elipse{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .wh-qm{
    margin: 15px;
  }
  .win-window-footer{
    position: absolute;
    height: 40px;
    line-height: 40px;
    width: 100%;
    bottom: 0;
    left: 0;
    background: rgba(245, 247, 249, 1);
    nav{
      display: flex;
      justify-content: space-between;
      li{
        list-style: none;
        width: 20%;
      }
    }
  }
</style>

