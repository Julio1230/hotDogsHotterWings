
function ListGroup(){
const items = [
    'New York',
    'Denver',
    'LA',
    'Houston'
    ];

    return (
    <ul className="list-group">
        {items.map(item => <li key={item}>{item}</li>)}
    </ul>
    );

}

export default ListGroup;