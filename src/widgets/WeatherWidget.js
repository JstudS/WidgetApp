import React, { useEffect } from 'react'

const WeatherWidget = () => {

    useEffect(() => {
        const timer = setInterval(() => {
          console.log("Тут оновлення погоди...");
        }, 3000);
    
        return () => clearInterval(timer); 
      }, []);
    
      return (
        <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: 8 }}>
          <h3>Погода Київ</h3>
          <p>Вітряно, +15°C</p>
        </div>
      );
}

export default WeatherWidget