import React, { createContext, useState, useEffect } from 'react';
export const ContextAp = createContext();

const ContextProvider = (props) => {
    const [ConsultaT, setConsultaT ] = useState([])
    const [ConsultaR, setConsultaR ]= useState([])
    const [ConsultaQ, setConsultaQ ]= useState([])
    useEffect(() => {
        const getConsultaT = () => {
            fetch('https://zenquotes.io/api/today')
            .then(data => {
                return data.json();
            })
            .then(resultado => {
                setConsultaT(resultado);
    
            });
        }
        const getConsultaR = () => {
            fetch('https://zenquotes.io/api/random')
            .then(data => {
                return data.json();
            })
            .then(resultado => {
                setConsultaR(resultado);
    
            });
        }
        const getConsultaQ = () => {
            fetch('https://zenquotes.io/api/random')
            .then(data => {
                return data.json();
            })
            .then(resultado => {
                setConsultaQ(resultado);
    
            });
        }
        getConsultaT()
        getConsultaR()
        getConsultaQ()
    },[])
    
    return (
        <ContextAp.Provider
        value={{
            ConsultaT,
            ConsultaR,
            ConsultaQ     
        }}>
        {props.children}
    </ContextAp.Provider>
    )
}
export default ContextProvider;