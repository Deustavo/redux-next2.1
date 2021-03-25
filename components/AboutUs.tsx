import React from 'react';
import { useSelector } from 'react-redux';

import { IGlobalState } from '../store/modules/user/types'

const AboutUs: React.FC = () => {
    const state = useSelector((state: IGlobalState) => state.users)

    function removeItem(i: number) {
      let div = document.getElementById(`aluno${i}`);
      if (div) 
        div.style.display = "none";
    }

    return (
        <div>
            <h1>Alunos matriculados</h1>
            <>
                { state.map( (user, index) => (
                    <div key={index} id={`aluno${index}`} style={{ backgroundColor: '#f1f1f1', padding: '16px', marginBottom: 16, borderRadius: 8, border: 'solid rgba(0, 0, 0, 0.3) 0.05px'}}>
                        <p style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}> { user.name } </p>
                        <p> { user.email } </p>
                        <p> { user.age } </p>
                        <button onClick={() => removeItem(index)} style={{ outline: 'none', border: 0, backgroundColor: '#bf5757', padding: 8, borderRadius: 6}}> Remover </button>
                    </div>

                ))}
            </>
        </div>
    );
}

export default AboutUs;