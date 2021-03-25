import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IUser } from '../store/modules/user/types';
import { addNewUser } from '../store/modules/user/actions';
import api from '../service/api' ;

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
                    <div key={index} style={{ backgroundColor: '#f1f1f1', padding: '16px', marginBottom: 16, borderRadius: 8, border: 'solid rgba(0, 0, 0, 0.3) 0.05px'}}>
                        <article>
                            <p style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}> { user.name } </p>
                            <p> { user.email } </p>
                            <p> { user.age } </p>
                            <button onClick={ () => handleUsers(user)} style={{ outline: 'none', border: 0, backgroundColor: '#71bf57', padding: 8, borderRadius: 6}}> Adicionar </button>
                        </article>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;