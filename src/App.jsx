import React from "react";

export default function App(){
    
    const [data, setData] = React.useState({
        degRange:0,
        color1:"#ffffff",
        color2:"#000000",
        darkMode:true
    })

    function handleChange(event){
        const {name, type, value, checked} = event.target
        setData(prev => {
            return {
                ...prev, [name] : type === "checkbox" ? checked : value
            }
        })
    }


    const styles = {
        background : 
            `linear-gradient(${data.degRange}deg, ${data.color1}, ${data.color2})`
    }

    const styleCode = `background : linear-gradient(${data.degRange}deg, ${data.color1}, ${data.color2})`

    
    return(
        <div className={!data.darkMode && "dark-bg"}>

            <label className="switch">
                <input 
                    type="checkbox"
                    checked={data.darkMode}
                    onChange={handleChange}
                    name="darkMode"
                />
                <span className="slider"></span>
            </label>

            <div className={data.darkMode ? "container" : "container dark-con"}>

                <div style={styles} className="palet">
                    
                </div>

                <div className="colors">
                    <input 
                        type="color" 
                        value={data.color1}
                        name="color1"
                        onChange={handleChange}
                        ></input>

                    <div className="deg-range">
                        <input 
                            className="degSlider" 
                            type="range"
                            min="0" max="360"
                            value={data.degRange}
                            name="degRange"
                            onChange={handleChange}
                            ></input>
                        <span className={!data.darkMode && "dark-text"}>{data.degRange}&deg;</span>
                    </div>

                    <input 
                        type="color" 
                        value={data.color2}
                        name="color2"
                        onChange={handleChange}
                        ></input>
                </div>

                <div>
                    <p 
                        className="text-box" 
                    >{styleCode}</p>
                </div>

            </div>

        </div>
    )
}