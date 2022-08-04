const state = {
    text:'vuex数据',
    count:0
}
const mutations = {
    SET_TEXT:(state:any,text:any)=>{
        state.text = text;
    }
}
const actions = {
}

export default{
    namespace:true,
    state,
    mutations,
    actions
}