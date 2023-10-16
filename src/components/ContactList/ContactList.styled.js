import styled from 'styled-components';

export const List = styled.ul`
display: flex;
flex-direction:column;
align-items: center;
gap: 20px;
width: 375px;
margin-top:30px;
padding-bottom:40px;
`;

export const Item = styled.li`
display: flex;
width: 100%;
justify-content: space-between;
align-items:center;
padding:16px 8px;
border-radius:0.75rem;
border: 1px solid rgba(229, 236, 231, 0.99);
box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
background-color: rgba(17, 24, 39, 0.8);
 color: rgba(243, 244, 246, 1);
`;

export const Button = styled.button`
padding: 4px;
cursor: pointer;
border-radius: 0.75rem;
&:hover
 {  
     color: #e84a5f; 
background-color: rgba(229, 236, 231, 0.99);
box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
};
`;