import { MantineProvider, MantineThemeOverride } from '@mantine/core';
import { ReactNode } from 'react';

const theme: MantineThemeOverride = {
    /** Put your Mantine theme overrides here */
};

interface MainProviderProps {
    children: ReactNode;
}

export default function MainProvider({ children }: MainProviderProps) {
    return (
        <MantineProvider theme={theme}>
            {children}
        </MantineProvider>
    );
}
