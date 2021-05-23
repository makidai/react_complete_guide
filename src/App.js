import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from "react";


const DUMMY_EXPENSES = [
    {
        id: "e1",
        title: "トイレットペーパー",
        amount: 200,
        date: new Date(2020, 7, 14),
    },
    {
        id: "e2",
        title: "テレビ",
        amount: 79800,
        date: new Date(2021, 2, 12),
    },
    {
        id: "e3",
        title: "車検",
        amount: 29400,
        date: new Date(2021, 2, 28),
    },
    {
        id: "e4",
        title: "木のテーブル",
        amount: 45000,
        date: new Date(2021, 5, 12),
    },
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

    const addExpenseHandler = (expense) => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses];
        });
    };

    // return React.createElement(
    //         "div",
    //         {},
    //         React.createElement("h2", {}, "Let's get statrted!"),
    //         React.createElement(Expenses, { items: expenses })
    // );
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
