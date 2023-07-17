import React from "react";

const filtraElementos = (arquivo, selectedValue) => {
  return arquivo.filter(item => {
    return item.categories && item.categories.includes(selectedValue);
  });
}

export { filtraElementos };
