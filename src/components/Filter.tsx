import { useState } from 'react';

type Props = {
  changeOption: (option: string) => void;
};

export const FilterOptions = ({ changeOption }: Props) => {
  const [option, setOption] = useState('All');

  return (
    <nav className="filter" data-cy="Filter">
      <a
        href="#/"
        className={`filter__link ${option === 'All' && 'selected'}`}
        data-cy="FilterLinkAll"
        onClick={() => {
          setOption('All');
          changeOption('All');
        }}
      >
        All
      </a>

      <a
        href="#/active"
        className={`filter__link ${option === 'Active' && 'selected'}`}
        data-cy="FilterLinkActive"
        onClick={() => {
          setOption('Active');
          changeOption('Active');
        }}
      >
        Active
      </a>

      <a
        href="#/completed"
        className={`filter__link ${option === 'Completed' && 'selected'}`}
        data-cy="FilterLinkCompleted"
        onClick={() => {
          setOption('Completed');
          changeOption('Completed');
        }}
      >
        Completed
      </a>
    </nav>
  );
};
