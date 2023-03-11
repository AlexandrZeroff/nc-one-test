import React from 'react';
import { createGlobalState } from 'react-hooks-global-state';

const { useGlobalState } = createGlobalState({
    favoriteProducts: []
})

export { useGlobalState }