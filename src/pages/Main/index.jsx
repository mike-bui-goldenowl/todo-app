import React from 'react';

// Component
import Header from '../../components/header';
import Footer from '../../components/footer';
import FormInput from '../../components/Search';
import BlockTodo from '../../components/blockTodo';
import { statusInProcess, statusCompleted } from '../../constants/statusTodo';

// style
import './styles.scss';

export default class Main extends React.Component {
  render() {
    return (
      <div className="block">
        <Header />
        <div className="inner">
          <div className="title">
            <h1>Todo-App</h1>
          </div>
          <FormInput />
          <BlockTodo title={statusInProcess} />
          <BlockTodo title={statusCompleted} />
        </div>
        <Footer />
      </div>

    );
  }
}
