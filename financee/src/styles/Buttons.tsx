import styled from "styled-components";

interface IButtonProps{
   className?: string;
   children: string;
}

const Button = ({className, children}: IButtonProps) =>{
   return (
      <button className={className}>
         {children}
      </button>
   )
}



export const StyledButton = styled(Button)`
   padding-inline: 4rem;
	padding-block: 0.5rem;
   height: fit-content;
   border: none;
`;