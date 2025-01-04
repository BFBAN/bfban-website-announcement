import React, {type ReactNode} from 'react';
import NavbarLayout from './Layout';
import NavbarContent from './Content';

import Lantern from "@site/src/components/_Lantern"

export default function Navbar(): ReactNode {
    return (
        <>
            <NavbarLayout>
                <NavbarContent/>
                <Lantern/>
            </NavbarLayout>
        </>
    );
}
