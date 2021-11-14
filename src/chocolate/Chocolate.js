const { Link, useParams } = ReactRouterDOM

function Chocolate() {

    return (
        <React.Fragment>
            <h3>Chocolate1 JS</h3>

            <ul className="navs">
                <li><Link to="/html/chocolate/page1/">Page1</Link></li>
                <li><Link to="/html/chocolate/page2/">Page2</Link></li>
            </ul>

        </React.Fragment>
    )
}

export default Chocolate
