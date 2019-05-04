import React from 'react';

export  const Article =  ({title, text}) =>
    (<div>
        <h4>{title}</h4>
        <div>{text}</div>
    </div>);