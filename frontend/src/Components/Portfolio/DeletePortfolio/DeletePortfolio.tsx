import React, { SyntheticEvent } from 'react';

interface Props {
  onPortfolioDelete?: (e: SyntheticEvent) => void;
  portfolioValue: string;
}

const DeletePortfolio = ({ onPortfolioDelete, portfolioValue }: Props) => {
  return (
    <div>
      <form onSubmit={onPortfolioDelete}>
        <input type="hidden" name="portfolioValue" value={portfolioValue} />
        <button type="submit">X</button>
      </form>
    </div>
  );
};

export default DeletePortfolio;
