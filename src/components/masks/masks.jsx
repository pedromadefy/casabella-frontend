import React from "react";

export function cep(e) {
  e.currentTarget.maxLength = 9;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{5})(\d)/, "$1-$2");
  e.currentTarget.value = value;
  return e;
}

export function currency(e) {
  let value = e.currentTarget.value;
  e.currentTarget.maxLength = 12;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{2})$/, "$1,$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");

  e.currentTarget.value = value;
  return e;
}

export function price(e) {
  let value = e.currentTarget.value;
  e.currentTarget.maxLength = 12;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{2})$/, "$1,$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");

  e.currentTarget.value = value;
  return e;
}

export function phone(e) {
  let value = e.currentTarget.value;
  e.currentTarget.maxLength = 15;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d{5})(\d)/, "$1-$2");

  e.currentTarget.value = value;
  return e;
}

export function dateMask(e) {
  let value = e.currentTarget.value;
  e.currentTarget.maxLength = 15;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d{5})(\d)/, "$1-$2");

  e.currentTarget.value = value;
  return e;
}

export function cpfMask(e) {
  let value = e.currentTarget.value;
  e.currentTarget.maxLength = 14;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{2})$/, "$1-$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");

  e.currentTarget.value = value;
  return e;
}

export function cnpj(e) {
  let value = e.currentTarget.value;
  e.currentTarget.maxLength = 18;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{8})(\d)/, "$1/$2");
  value = value.replace(/(\d)(\d{2})$/, "$1-$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");

  e.currentTarget.value = value;
  return e;
}
