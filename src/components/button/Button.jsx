import React  from "react";
import * as S from "./styles.js";
export default function Button({props,className,type,children, onClick, onSubmit}) {
  return (
    <>
      <S.ButtonContainer>
        <button
        type={type}
        onSubmit={onSubmit}
        onClick={onClick}
        className={className}
        >
          {children}
         

        </button>
      </S.ButtonContainer>
    </>
  );
}
