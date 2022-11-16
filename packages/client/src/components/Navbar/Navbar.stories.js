import React from 'react';
import { Navbar } from './Navbar';

export default {
  title: 'Example/Navbar',
  component: Navbar,
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <Navbar {...args} />;

// 👇 Each story then reuses that template
export const NavList = Template.bind({});
NavList.args = {
  List1: 'Home',
  src: 'https://www.hackyourfuture.dk/',
  List2: 'About Us',
  List3: 'Contact',
  placeholderText: 'Search Spices',
};
