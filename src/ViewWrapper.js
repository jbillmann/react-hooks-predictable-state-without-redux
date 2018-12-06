import React from 'react';
import { NameProvider } from "./providers/nameProvider";
import Name from './views/Name';

export default function ViewWrapper(props) {
  return (
    <NameProvider>
        <Name />
    </NameProvider>
  );
}