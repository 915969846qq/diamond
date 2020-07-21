// import Vue from 'vue'
// import Vuex from 'vuex'
import axios from 'axios'
// import { delete } from 'vue/types/umd';
// import { delete } from 'vue/types/umd';


// Vue.use(Vuex)
// Vue.prototype.axios = axios;

//存数据
const state = {

    //查询出来的数据
    searchgoods: [],

    newsearchgoods: [],

    //查询的参数
    searchcriteria: {},

    //总数
    alldimouds: [],

    num: this,

    //判断是否登录成功
    islogin: true,


    isusername: true,

    issuccess: false,


    transmission: {}

}



//直接操作state,只有mutations可以操作
const mutations = {
    addtocarthunjie(state) {
        console.log((JSON.parse(sessionStorage.user)[0]).id)
        console.log(state.transmission)
        axios.post("/api/addtocart1.do", { gname: state.transmission.diamondname, gletteringinner: '', gLetteringtime: '', gprice: state.transmission.diamondprice, handsize: state.transmission.weight, gnamenan: '', gnamenv: '', handsizenan: '', handsizenv: '' })
        this.dispatch("cartinfo")
    },



    searchRange(state, range) {
        // console.log(range[0])
        if (range[0] >= 1000) {
            // console.log(range)
            state.searchcriteria.diamondprice = range
        } else {
            // console.log(range)
            state.searchcriteria.weight = range
        }
        this.dispatch('searchcriteria')
    },
    searchfluor(state, title) {
        state.searchfluor = title
        // state.searchcriteria.push({'fluor':title})
        state.searchcriteria.fluorescence = title
        // console.log(title)
        // console.log(state.searchcriteria)
        this.dispatch('searchcriteria')


    },
    researchfluor(state, title) {
        delete state.searchcriteria.fluorescence
        this.dispatch('searchcriteria')
    },
    searchvarieties(state, title) {
        console.log(title)
        axios.get("api/varieties.do", {
            params: title
        }).then(res => {
            console.log(res)
            state.searchgoods = res.data
        }).catch(err => {

        })
    },
    searchAddress(state, address) {
        state.searchAddress = address;
        state.searchcriteria.location = address
        console.log(address)
        // console.log(state.searchcriteria)
        this.dispatch('searchcriteria')
    },
    researchAddress(state, address) {
        state.searchAddress = address;
        delete state.searchcriteria.location    
        // console.log(address)
        // console.log(state.searchcriteria)
        this.dispatch('searchcriteria')
    },
    searchColor(state, shape) {
        state.searchshape = shape
        state.searchcriteria.shape = shape
        // console.log(shape)
        // console.log(state.searchcriteria)
        this.dispatch('searchcriteria')
    },
    researchColor(state, shape) {
        delete state.searchcriteria.shape;
        this.dispatch('searchcriteria')
    },
    searchColorName(state, color) {
        let type = color.split('_')
        // console.log(type)
        if (type[1] == "color") {
            state.searchcolor = type[0]
            state.searchcriteria.color = type[0]
        } else if (type[1] == "clear") {
            state.searchclear = type[0]
            state.searchcriteria.clean_liness = type[0]
        }
        this.dispatch('searchcriteria')
        // console.log(state.searchcriteria)
        // console.log(state.searchcolor)
        // console.log(state.searchclear)
    },
    researchColorName(state, color) {
        let type = color.split('_')
        // console.log(type)
        if (type[1] == "color") {

            delete state.searchcriteria.color
        } else if (type[1] == "clear") {

            delete state.searchcriteria.clean_liness
        }
        this.dispatch('searchcriteria')
        // console.log(state.searchcriteria)
    },
    searchlight(state, light) {
        let actions = light.split('_')
        if (actions[1] == 'light') {
            state.searchlight = actions[0]
            state.searchcriteria.polishing = actions[0]
        } else if (actions[1] == 'cut') {
            state.searchcut = actions[0]
            state.searchcriteria.diamondcut = actions[0]
        } else {
            state.searchsymmetric = actions[0]
            state.searchcriteria.symmetric = actions[0]
        }
        // console.log(state.searchlight)
        // console.log(state.searchcut)
        // console.log(state.searchsymmetric)
        // console.log(state.searchcriteria)
        this.dispatch('searchcriteria')
    },
    researchlight(state, light) {
        let actions = light.split('_')
        if (actions[1] == 'light') {

            delete state.searchcriteria.polishing
        } else if (actions[1] == 'cut') {

            delete state.searchcriteria.diamondcut
        } else {

            delete state.searchcriteria.symmetric
        }
        // console.log(state.searchlight)
        // console.log(state.searchcut)
        // console.log(state.searchsymmetric)
        // console.log(state.searchcriteria)
        this.dispatch('searchcriteria')
    },
    searchgoods(state, res) {

        state.searchgoods = res.data
        // state.searchgoods.push(res.data.length)
        // console.log( state.searchgoods)
    },
    searchcertificate(state, certificate) {
        // console.log(certificate)
        state.searchcriteria.certificatetype = certificate
        this.dispatch('searchcriteria')
    },
    researchcertificate(state, certificate) {
        delete state.searchcriteria.certificatetype
        this.dispatch('searchcriteria')
    },
    pagesearch(state, arr) {
        state.newsearchgoods = state.searchgoods.slice((arr[0] - 1) * arr[1], arr[0] * arr[1])

    },

    loginsuccess(state, sign) {
        if (sign == "err") {
            state.islogin = false
        } else {
            state.islogin = true
            state.logindata = sign
            console.log(state.logindata)
        }
    },


    mverification(state, data) {
        if (data == "nonexistent") {
            state.isusername = true
        } else if (data == "existence") {
            state.isusername = false
        }
    },

    registersuccess(state, data) {
        if (data == "注册成功") {
            state.issuccess = true
        } else {
            state.issuccess = false
        }
    },

    
    datatransmission(state, data) {
        console.log(data)
        state.transmission = data
    }

}

const actions = {
    searchall() {
        axios.get('api/getall.do').then(res => {
            // console.log(res)
            this.commit('searchgoods', res)
        }).catch(err => {
            // console.log(err) 
        })
    },
    searchcriteria() {
        axios.get('api/searchgoods.do', {
            params: state.searchcriteria,
        }).then(res => {
            //    console.log(res)
            this.commit('searchgoods', res)
        }).catch(err => {
            // console.log(err)
        })
        console.log('----------')
    },
    numdiamouds() {
        axios.get('api/getnum.do').then(res => {
            // console.log(res.data[0])

            state.alldimouds = res.data[0]
            // console.log(res.data[0])
        }).catch(err => {

        })
    },

    //登录请求
    newlogin(state, shuju) {
        console.log('----------------')
        console.log(shuju)
        axios.post('api/login.do', {

            username: shuju.username,
            password: shuju.password

        }).then(res => {
            console.log(res)
            this.commit("loginsuccess", res.data)
            sessionStorage.setItem('user', JSON.stringify(res.data))
        }).catch(err => {
            console.log(err)
        })
    },


    //验证账号是否存在
    verificationphone(state, thisphone) {
        console.log(thisphone)

        axios.get("api/verification.do", {
            params: {
                phone: thisphone
            }
        }).then(res => {
            this.commit("mverification", res.data)
        }).catch(err => {

        })

    },
    myregister(state, register) {
        console.log(register)
        axios.get("api/myregister.do", {
            params: {
                username: register[0],
                password: register[1]
            }
        }).then(res => {
            console.log(res)
            this.commit("registersuccess", res.data)
        }).catch(err => {

        })
    }
}


export default {
    state,
    mutations,
    actions
}