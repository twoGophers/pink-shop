<template>
    <div class="v-rightBlock">
        
        <div class="slider-registr">
            <div class="slider"><vSlider /></div>
            <div class="registr"><vRegistr /></div>
        </div>
        <div class="catalogTovar">
            <vWrapperCatalog />
        </div> 
    </div>
</template>

<script>
import vSlider from "./v-slider"
import vRegistr from "./v-registr"
import vWrapperCatalog from '../catalog/v-wrapper-catalog'

export default {
    name : "v-rightBlock",
    components : {
        vSlider,
        vRegistr,
        vWrapperCatalog
    }
}
</script>

<style lang="scss">
.v-rightBlock {
    display: flex;
    flex-direction: column;
    width: 100%;
    .slider-registr {
        display: flex;
        flex-direction: row;
        .slider {
            width: 75%;
        }
        .registr {
            width: 25%;
        }
    }
}
@media (max-width : 920px) and (min-width: 230px){
.v-rightBlock {
    .catalogTovar{
            width: 100%;
        }
    }
}

@media (max-width : 390px) and (min-width: 230px){
    .v-rightBlock {
        width: 100%;
        .slider-registr{
            width: 100%;
            .registr{
                width: 100%;
            }
            .slider{
                display: none;
            }
        }
        .catalogTovar{
            width: 100%;
        }
    }
}
</style>