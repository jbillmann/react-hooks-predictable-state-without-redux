import React from 'react';
import { StoreProvider } from "./providers/Store";
import Name from './views/Name';

export default function ViewWrapper(props) {
  return (
    <StoreProvider>
        <Name />
    </StoreProvider>
  );
}