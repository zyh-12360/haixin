<template>
    <div class="dialog" v-show="showMask">
        <div class="dialog-container">
            <div class="dialog-title">{{title}}</div>
            <div class="content" v-html="content"></div>
                <hr style="border:0.5px solid #ccc;">
            <div class="btns">
                <div v-if="type != 'confirm'" class="default-btn" @click="closeBtn">
                    {{cancelText}}
                </div>
                <div v-if="type == 'danger'" class="danger-btn" @click="dangerBtn">
                    {{dangerText}}
                </div>
            </div>
            <div class="close-btn" @click="closeMask">×</div>
        </div>
        
    </div>
</template>
<script>
export default {
    name:"dialog",
    props: {
        value: {},
        // 类型包括 defalut 默认， danger 危险， confirm 确认，
        type:{
            type: String,
            default: 'default'
        },
        content: {
            type: String,
            default: `<b>[审慎阅读]</b>您在申请注册流程中点击同意前，应当认真阅读以下协议。<b>请您务必审慎阅读、充分理解协议中相关条款内容，其中包括：<br/><br/>

1、与您约定免除或限制责任的条款；<br/>
2、与您约定法律适用和管辖的条款；<br/>
3、其他以粗体下划线标识的重要条款。<br/>
如您对协议有任何疑问，可向商城在线客服咨询。<br/><br/>
[特别提示]</b>当您按照注册页面提示填写信息、阅读并同意协议且完成全部注册程序后，即表示您已充分阅读、理解并接受协议的全部内容。如您因购买商城产品/服务发生争议的，适用《海信商城注册协议》处理。如您在使用平台服务过程中与其他用户发生争议的，依您与其他用户达成的协议处理。<br/> 
<b>阅读协议的过程中，如果您不同意相关协议或其中任何条款约定，您应立即停止注册程序。<br/><br/>

点击同意并接受即表示您已阅读了解并同意</b> 《注册协议》 《隐私政策》 《法律声明》`
        },
        title: {
            type: String,
            default: '123'
        },
        cancelText: {
            type: String,
            default: '取消'
        },
        dangerText: {
            type: String,
            default: '删除'
        },
        confirmText: {
            type: String,
            default: '确认'
        },
    },
    data(){
        return{
            showMask: false,
        }
    },
    methods:{
        closeMask(){
            this.showMask = false;
        },
        closeBtn(){
            this.$emit('cancel');
            this.closeMask();
        },
        dangerBtn(){
            this.$emit('danger');
            this.closeMask();
        },
        confirmBtn(){
            this.$emit('confirm');
            this.closeMask();
        }
    },
    mounted(){
        this.showMask = this.value;
    },
    watch:{
        value(newVal, oldVal){
            this.showMask = newVal;
        },
        showMask(val) {
            this.$emit('input', val);
        }
    },
}
</script>
<style lang="less" scoped>
    .dialog{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: 9999;
        .dialog-container{
            width: 588px;
            height: 469px;
            background: #ffffff;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 8px;
            position: relative;
            .dialog-title{
                width: 100%;
                height: 60px;
                font-size: 18px;
                text-align: center;     
                color: #000;
                // font-weight: 600;
                padding: 16px 50px 0 20px;
                box-sizing: border-box;
            
            }
            .content{
                color: #000;
                font-family: PingFangSC-Regular,"Microsoft YaHei",simsun,"Helvetica Neue",Arial,Helvetica,sans-serif;
                line-height: 20px;
                padding: 0 20px;
                box-sizing: border-box;
                font-size: 14px;
            }
            .inp{
                margin: 10px 0 0 20px;
                width: 200px;
                height: 40px;
                padding-left: 4px;
                border-radius: 4px;
                border: none;
                background: #efefef;
                outline: none;
            }
            .btns{
                width: 100%;
                height: 60px;
                // line-height: 60px;
                position: absolute;
                bottom: 0;
                left: 0;
                text-align: right;
                padding: 0 16px;
                box-sizing: border-box;
                & > div{
                    display: inline-block;
                    height: 40px;
                    line-height: 40px;
                    padding: 0 14px;
                    color: #ffffff;
                    background: #f1f1f1;
                    border-radius: 2px;
                    margin-right: 140px;
                    font-size: 14px;
                    width: 100px;
                    text-align: center;
                    cursor: pointer;
                }
                .default-btn{
                    color: #787878;
                    background: #ffffff;
                    border: 0.5px solid #ccc;
                    margin-right: 20px;
                }
                .danger-btn{
                    border: 0.5px solid #00aaa6;
                    background: #00aaa6;
                    &:hover{
                        background: #1fccd0;
                        border: 0.5px solid #1fccd0;
                        
                    }
                }
            }
            .close-btn{
                position: absolute;
                top: 16px;
                right: 16px;
                width: 30px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                font-size: 18px;
                cursor: pointer;
                &:hover{
                    font-weight: 600;
                }
            }
        }
    }
</style>
