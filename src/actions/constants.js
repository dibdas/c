const ERROR_MEALS ='ERROR_MEALS' 
const SUCCESS_MEALS = 'SUCCESS_MEALS'
const CHANGE_CATEGORY = ' CHANGE_CATEGORY';
const successmeals = (data) => ({
    type:'SUCCESS_MEALS',
    data
})
const errormeals = (error)=>({
    type:'ERROR_MEALS',
    error
})
const changecategory = (category)=>({
    type:'CHANGE_CATEGORY',
    category

})
export {ERROR_MEALS,SUCCESS_MEALS,CHANGE_CATEGORY,changecategory,successmeals, errormeals}