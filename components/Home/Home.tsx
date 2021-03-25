import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IUser } from '../../store/modules/user/types';
import { addNewUser } from '../../store/modules/user/actions';
import api from '../../service/api';
import styles from './Home.module.css';

const Home: React.FC = () => {
    const dispatch = useDispatch()
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        api.get('student').then(
            response => {
                setUsers(response.data.student)
            }
        )
    }, [])

    const handleUsers = useCallback( ( user: IUser  ) => {
        dispatch((addNewUser(user)))
    }, [dispatch]) 

    return (
        <div>
            <h1>Todos os alunos:</h1>
            <div>
                { users.map( (user, index) => (
                    <div key={index} className={styles.alunoContent}>
                        <article>
                            <p> { user.name } </p>
                            <p> { user.email } </p>
                            <p> { user.age } </p>
                            <button onClick={ () => handleUsers(user)} className={styles.button}> Fazer Matricula </button>
                        </article>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;