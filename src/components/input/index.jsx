import React from 'react';

import {
    AiOutlineForm,
    AiOutlineUser,
    AiOutlineKey
} from 'react-icons/ai'

import './styles.scss';



export default function Input({ value, name, type, placeholder, onChange, username, password, search }) {
    const icon = () => (

        username ? <AiOutlineUser  size={30} />
            :
            password ? <AiOutlineKey size={30} />
                :
                <AiOutlineForm size={30}  />

    )
    return (
        <div className="input">
            {
                icon()
            }
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                autoComplete="off"
                value={value}
            />
        </div>

    )
}
