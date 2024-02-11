import { Menu, MenuButton, MenuButtonProps, MenuItem, MenuList } from '@chakra-ui/react';
import FilterIcon from '../icons/FilterIcon';

interface FilterBtnProps extends MenuButtonProps {
  onFilterChange?: (filter: 'ascending' | 'descending') => void;
}

export default function FilterBtn({ onFilterChange, ...rest }: FilterBtnProps) {
  return (
    <Menu size={'xs'}>
      <MenuButton fontSize={'xl'} {...rest}>
        <FilterIcon />
      </MenuButton>
      <MenuList>
        <MenuItem
          fontSize={'xs'}
          onClick={() => {
            onFilterChange && onFilterChange('ascending');
          }}
        >
          Sort A-Z
        </MenuItem>
        <MenuItem
          fontSize={'xs'}
          onClick={() => {
            onFilterChange && onFilterChange('descending');
          }}
        >
          Sort Z-A
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
