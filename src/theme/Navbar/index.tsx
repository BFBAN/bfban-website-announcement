import React, {type ReactNode} from 'react';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarContent from '@theme/Navbar/Content';

import Lantern from "@site/src/components/_Lantern"

export default function Navbar(): ReactNode {
  return (
    <NavbarLayout>
      <NavbarContent />
      <Lantern/>
    </NavbarLayout>
  );
}
