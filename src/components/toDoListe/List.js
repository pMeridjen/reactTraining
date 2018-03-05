import React, {Component} from 'react';

const List = props => (
            <div>
        <h1> Ma liste </h1>
        <ul>
    {
      props.items.map((item, index) => <li key={index}>{item}</li>)
    }
</ul>
</div>
        )
    

export default List;