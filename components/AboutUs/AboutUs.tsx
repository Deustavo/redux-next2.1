import React from 'react';
import { useSelector } from 'react-redux';
import { IGlobalState } from '../../store/modules/user/types'
import styles from './AboutUs.module.css';

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
                    <div key={index} id={`aluno${index}`} className={styles.alunoContent}>
                        <p > { user.name } </p>
                        <p> { user.email } </p>
                        <p> { user.age } </p>
                        <button onClick={() => removeItem(index)} className={styles.button}> Desfazer matricula </button>
                    </div>

                ))}
            </>
        </div>
    );
}

export default AboutUs;