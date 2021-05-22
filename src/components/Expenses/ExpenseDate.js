import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString("ja-JP", { month: "long" });
    const day = props.date.toLocaleString("ja-JP", { day: "2-digit" });

    return (
        <div class="expense-date">
            <div class="expense-date__year">{year}</div>
            <div class="expense-date__month">{month}</div>
            <div class="expense-date__day">{day}</div>
        </div>
    );
}

export default ExpenseDate;
