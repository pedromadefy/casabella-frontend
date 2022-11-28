import React from "react";
import * as S from "./styles.js";

export default function Input({
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
  autoComplete,
}) {
  return (
    <>
      <S.Input>
        <input
          autoComplete={autoComplete}
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </S.Input>
    </>
  );
}
