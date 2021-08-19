const ERROR_MEALS ='ERROR_MEALS' 
const SUCCESS_MEALS = 'SUCCESS_MEALS'
const successmeals = (data) => ({
    type:'SUCCESS_MEALS',
    data
})
const errormeals = (error)=>({
    type:'ERROR_MEALS',
    error

})
export {ERROR_MEALS,SUCCESS_MEALS, successmeals, errormeals}