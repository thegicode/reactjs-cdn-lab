var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { updateAmount, getTotal } from './actions.js';

var _React = React,
    useState = _React.useState;


var Book = function Book(_ref) {
    var book = _ref.book,
        dispatch = _ref.dispatch,
        index = _ref.index;

    var _useState = useState(book.amount),
        _useState2 = _slicedToArray(_useState, 2),
        amount = _useState2[0],
        setAmount = _useState2[1];

    var handleChange = function handleChange(e) {
        var amount = e.target.value;
        setAmount(amount);
        dispatch(updateAmount(index, amount));
        dispatch(getTotal());
    };

    return React.createElement(
        "li",
        { className: "order-item" },
        React.createElement(
            "p",
            { className: "name" },
            book.name
        ),
        React.createElement(
            "p",
            null,
            book.price,
            "\uC6D0"
        ),
        React.createElement(
            "label",
            { className: "amount" },
            React.createElement(
                "span",
                { className: "__text" },
                "\uC218\uB7C9"
            ),
            React.createElement("input", { type: "number", min: "0",
                className: "__input",
                value: amount,
                onChange: handleChange })
        )
    );
};

var List = function List(store) {
    var getState = store.getState,
        dispatch = store.dispatch;

    var books = getState().books;

    return React.createElement(
        "ul",
        { className: "orders" },
        books && books.length > 0 && books.map(function (book, index) {
            return React.createElement(Book, {
                key: index,
                book: book,
                dispatch: dispatch,
                index: index });
        })
    );
};

export default List;