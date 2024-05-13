import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';

function App() {
    return (

        <AppProvider>
            <div className="App container">
                <h1 className="mt-1">Shopping App</h1>
                <div className="mt-1 row">
                    <div className="col-sm">
                        <CartValue />
                    </div>
                    <div className="col-sm">
                        <Location />
                    </div>
                    <h3 className="mt-2">Shopping Cart</h3>
                    <div className="row">
                        <div className="col-sm">
                            <ExpenseList />
                        </div>
                    </div>
                    <h2 className="mt-2">Add Items</h2>
                    <div className="row">
                        <div className="col-sm">
                            <ItemSelected />
                        </div>
                    </div>

                </div>
            </div>
        </AppProvider>
    );
}

export default App;
