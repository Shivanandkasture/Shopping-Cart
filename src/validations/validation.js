
const validation = (values)=>{
console.log(values)
    let errors ={};

    if(!values.fname){
        errors.fname = "first name is required"
    }

    return errors
}

export default validation