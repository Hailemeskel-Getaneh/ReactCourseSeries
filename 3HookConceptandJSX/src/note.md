This program is after we have learnt something about Hooks and jsx

-Hook is a new feature of react helps to state management

.JSX is component to include to html inside js code
- you can use createElement to use jsx or simple write it in two ways.
-Try to use camelCase naming as convention
- use 
          className in stead of class in html
          htmlFor instead of for in html

-createElement has three componets - the  tag or tag name
                                   - the id and class - this is option you can put it as  null
                                   - and the conetent rendered or the children

        React.createElement(
            'div',
            {id:'myClass', className:''myDiv}
            React.createElement('h1', null, 'Hello world')
        )