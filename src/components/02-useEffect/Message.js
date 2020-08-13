import React from 'react'
import { useEffect } from 'react'

export const Message = () => {


    useEffect(() => {
        console.log('Componente Montado')
        return () => {
            console.log('Componente desmontado')
        }
    }, [])

    return (
        <div>
            <h3>Eres genial</h3>
        </div>
    )
}
