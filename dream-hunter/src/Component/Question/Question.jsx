import React from 'react';

const Question = () => {
    return (
        <div >
           <h2 className='text-5xl text-center py-8'>Question & Answer</h2>
           <div className='text-center text-xl'>
            <p className='bg-red-200 py-8'>When should we use Context api ?</p>
            <p className='p-2'>We use it when need to pass data from a parent component to its descendants without the need to explicitly pass the data through every level of the component tree</p>
            <p className='bg-red-200 py-8'>What is custom hook ?</p>
            <p className='p-2'>Custom hooks can be used to abstract away complex state management or API calls, and can greatly simplify the logic in our components.Custom hooks are similar to regular React hooks, but they are not built-in hooks like useState, useEffect, or useContext. </p>
            <p className='bg-red-200 py-8'>What is useRef ?</p>
            <p className='p-2'>useRef is a hook in React that provides a way to create a mutable reference to a DOM element or a value that persists across component renders. It is similar to the ref attribute in class components, but it can be used in functional components.</p>
            <p className='bg-red-200 py-8'>What is useMemo ?</p>
            <p className='p-2'>useMemo is a hook in React that is used to optimize performance by memoizing the result of a function that is expensive to run. It is similar to React.memo, but instead of memoizing a component, it memoizes the result of a function.</p>
           </div>
        </div>
    );
};

export default Question;