import React, { useState, useContext } from 'react';
import githubContext from '../../context/github/githubContext';
import alertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext1 = useContext(githubContext);
  const alertContext1 = useContext(alertContext);
  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      alertContext1.setAlert('Please enter something', 'light');
    } else {
      githubContext1.searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContext1.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext1.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
