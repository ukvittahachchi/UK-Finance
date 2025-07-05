import React, { SyntheticEvent } from 'react';
import Card from '../Card/Card';
import { JSX } from 'react/jsx-runtime';
import { CompanySearch } from '../../company';
import {v4 as uuidv4} from 'uuid';
// eslint-disable-next-line @typescript-eslint/no-unused-vars



interface Props {
  searchResult: CompanySearch[];
  onPortfolioCreate:(e: SyntheticEvent) => void;
}

const Cardlist: React.FC<Props> = (props: Props): JSX.Element => {
  const { searchResult , onPortfolioCreate} = props;
  
  return (
    <>
      {searchResult.length > 0 ? (
        searchResult.map((result) => {
          return <Card 
          id={result.symbol} 
          key={uuidv4()} 
          searchResult={result} 
          onPortfolioCreate={onPortfolioCreate}
          />;
        })
      ) : (
        <div>
          <h2>No results found</h2>
        </div>
      )}
    </>
  );
};

export default Cardlist;