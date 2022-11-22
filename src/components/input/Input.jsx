import React from "react";
import * as S from "./styles.js";

export default function Input(props, className, type, name, id, placeholder) {
  return (
    <>
      <S.Input>
        <input
          className={className}
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
        />
      </S.Input>
    </>
  );
}
