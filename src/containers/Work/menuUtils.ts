import { MenuItem } from './menuItems';
import type { WorkContent } from './WorkContent';

const menuItem = (menu: MenuItem,
  index: number, view: WorkContent): JSX.Element | null => {
  if (menu.link !== []) return view.makeMenuLink(menu, index);
  return null;
};

export default { menuItem };
