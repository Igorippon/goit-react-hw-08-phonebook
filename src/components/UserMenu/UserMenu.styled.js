import styled from "styled-components";

export const Wrapper = styled.div`

  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Username = styled.p`
font-weight: 700;
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
