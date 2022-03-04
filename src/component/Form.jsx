
let Form = ()=>{
    let handleSubmit = (e=>{
        alert("hello")
        e.preventDefault()
        console.log(e.target.value.name);
    })
    return(
        <>
            <form type="submit" onSubmit={handleSubmit}>
                <label htmlFor="name"> Name:
                    <input type="text" placeholder="Enter your name" name="name"  />    
                </label>
                <label htmlFor="">selesct image:
                    <input type="file" placeholder="select file" name="file" />
                </label>
                <button>Submit</button>
            </form>

        </>
    )
}
export default Form;