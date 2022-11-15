import logo from './logo.svg';
// import './App.css';
import {ReduceExample} from './components/HooksPrac';
import {TextForm} from './components/TextForm';
import {NavbarComp} from './components/Navbar';
import {MyForm} from './components/MyForm'
import Form from './components/Form';
import MyFormclass from './components/MyFormclass';

{/* can use anyname if default export or use {Greet} if named export */ }

function App() {
  return (
    <>
      {/* <NavbarComp title={"TextUtils "}/> */}
      
      {/* <div className='container my-3'>
        <ReduceExample/>
        <TextForm heading="Text Form" />
      </div> */}

      <div className='container my-3'>
        {/* <MyForm title={"Sign Up!"}/> */}
        <MyFormclass title={"Sign Up!"} />
      </div>
      
    </>
  );
}


export default App; 
