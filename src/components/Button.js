import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
    background: ${({primary}) => (primary ? '#000D1A' : '#CD853F')};
    border: none; 
    text-decoration: none;
    white-space: nowrap;
    outline: none;
    min-width: 100px; 
    max-width: 200px;
    display: flex;
    transition: 0.3s;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: ${({big}) => (big ? '16px 40px' : '14px 24px')};
    color: ${({primary}) => (primary ? '#FFF' : '#000D1A')};
    font-size: ${({big}) => (big ? '20px' : '14px')};
    &:hover { 
        transform: translateY(-2px);
    }
`