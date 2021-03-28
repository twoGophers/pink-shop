<template>
    <div class="v-wrapper-catalog">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
    </div>
</template>

<script>


export default {
    name: "v-wrapper-catalog",
    components : {
       
    },
    
}
</script>

<style lang="scss">


@media (max-width : 920px) and (min-width: 230px){
    .v-wrapper-catalog{
        width: 100%;
    }
}
</style>