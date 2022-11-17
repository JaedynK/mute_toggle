
function MuteToggle({toggle, setToggle}){

    let image1 = toggle ? "/icons/on.svg" : "/icons/off.svg"

   const toggleButton = () => {
    setToggle(toggle => toggle ?  false : true)

    console.log(toggle)
    console.log("button click")

    return 
   }

    return(

        <div className="wack" >
            <img src={ image1 }></img>

        <button onClick={toggleButton }>Button</button>
        <h1>test</h1>
        </div>
    ) 
    
}

export default MuteToggle