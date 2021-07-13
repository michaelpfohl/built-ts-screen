import { LoanForm } from './components/forms/loanForm';
import { BudgetForm } from './components/forms/budgetForm';
import { CollateralForm } from './components/forms/collateralForm';
import LoanGrid from './components/grids/loanGrid';
import BudgetGrid from './components/grids/budgetGridClass';
import CollateralGrid from './components/grids/collateralGrid';
import logo from './assets/blt-logo-web.svg'

function App() {
  return (
    <div className="App">
      <img className="built-logo mb-5" src={logo} alt="Built Logo" />
      <div className="d-flex justify-content-around mt-5">
        <div>
          <BudgetForm />
          <BudgetGrid />
        </div>
        <div>
          <LoanForm />
          <LoanGrid />
        </div>
        <div>
          <CollateralForm />
          <CollateralGrid />
        </div>
      </div>
    </div>
  );
}

export default App;
