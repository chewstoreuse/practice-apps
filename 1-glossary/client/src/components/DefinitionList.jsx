import React from 'react';
import Definition from './Definition.jsx';

const DefinitionList = (props) => (
  <div>
    <h3>Dictionary:</h3>
    {props.definitions.map((def, i) =>
      <Definition key={i} definition={def} handleEdit={props.handleEdit} handleDelete={props.handleDelete} />
    )}
  </div>
);

export default DefinitionList;