<template>
    <div>
        
    </div>
</template>

<script>
export default {
    name:'zhuce',
    mounted(){
        this.loadpopup();
    },
    methods:{
        loadpopup(){
            this.$dialog.confirm('Please confirm to continue')
                .then(function () {
                // 点击确定执行
                    console.log('Clicked on proceed')
                })
                .catch(function () {
                // 点击取消执行
                    console.log('Clicked on cancel')
            });

        }
    }
}
</script>

<style>

</style>
