<template>
    <div class="v-header">
        <div class="logo">
            <img src="../../images/logot.png" alt="" srcset="">
        </div>
        <div class="titleHeader">
            <h3>Pink- Cat</h3>
        </div>
        <div class="searcheHeader">
            <div class="contactHeader">
                <p>Телефон : +8-123-456-78-90</p>
                <p>Контакты  : pink...</p>
            </div>
            <div class="searchHeaderIt">
                <b-nav-form>
                <b-form-input v-model="searchValue" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                    <router-link :to="{name : 'catalog'}">
                        <b-button  @click="search(searchValue)" size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </router-link>
                </b-nav-form>
            </div>
            <div class="cartHeader">
                <img src="../../images/3468855.svg" alt="cart" srcset="">
                <router-link :to="{name : 'cart', params : {cart_data: CART}}">
                    <h5>{{CART.length}}</h5>
               </router-link>
            </div>
           
        </div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'


export default {
    name : "v-header",
    data () {
        return {
            searchValue : ''
        }
    },
    components : {
    },
    computed : {
        ...mapGetters([
            'CART',
            'SEARCH_VALUE'
        ])
    },
    methods : {
        ...mapActions ([
            'GET_SEACH_VALUE_TO_VUEX'
        ]),
        search (value) {
            this.GET_SEACH_VALUE_TO_VUEX(value);
        }
    }
}
</script>

<style lang="scss">
.v-header {
    width: 100%;
    background: url("../../images/bgHeader.jpg") no-repeat;
    background-size: cover;
    height: 120px;
    display: flex;
    flex-direction: row;
    
    .logo{
        width: 20%;
        display: flex;
        justify-content: center;
        img {
            width: 52%;
            height: 100%;
        }
    }
    .titleHeader {
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: URW Chancery L, cursive;
        h3 {
            font-size: 2.0em;
        }

    }
    .searcheHeader {
        width: 60%;
        display: flex;
        flex-direction: row;
        
        .contactHeader{
            width: 40%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: URW Chancery L, cursive;
        }
        .searchHeaderIt{
            width: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
            
        }
        .cartHeader{
            width: 20%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            img {
                width: 35px;
                height : auto;
            }
            h5 {
                margin-left: 10px;
            }

        }
    }
}

@media screen and (max-width: 1215px){
    .v-header {
        .logo{
            img {
                width: 70%;
            }
        }
    }
    .searchHeaderIt{
        display: flex;
        justify-content: center;
        padding: 0;
        .form-inline{
            display: flex;
            justify-content: center;
            padding: 0;
            .router-link-exact-active{
                width: 100%;
                display: flex;
                justify-content: center;
                margin: 0;
                padding: 0;
                .btn{
                    width: 50%;
                }
            }
        }
    }
    .contactHeader{
        p{
            font-size: 0.9em;
        }
    }
}

@media screen and (max-width: 862px){
    .v-header{
        width: 100%;
        height: 160px;
        .searcheHeader{
            width: 60%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0;
            justify-content: center;
            .cartHeader{
                position: fixed;
                right: 1px;
                z-index: 2;
                margin: 0;
                padding: 0;
                width: 10%;
                top: 1px;
            }
            .searchHeaderIt{
                width: 90%;
            }
            .contactHeader{
                width: 90%;
            }
        }
        .logo{
            width: 20%;
            img{
                width: 100%;
            }
        }
        .titleHeader{
            width: 20%;
        }
    }
}

@media screen and (max-width: 600px){
    .v-header{
        width: 100%;
        .logo{
            display: none;
        }
        .titleHeader{
            width: 30%;
        }
    }
}

@media (max-width : 390px) and (min-width: 230px){
        .v-header{
        width: 100%;
        height: auto;
        .logo{
            display: none;
        }
        .titleHeader{
            display: none;
        }
        .searcheHeader{
            width: 80%;
            margin-left: 5px;
            .cartHeader{
                right: 20px;
            }
            .searchHeaderIt{
                .my-2.my-sm-0{
                    width: 90%;
                }
            }
        }
    }
}
</style>