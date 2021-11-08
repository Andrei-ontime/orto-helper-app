import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <nav className='menu'>
      <ul className='menu__list'>
        <li className='menu__list-item'>
          <Link to='/homepage'>Орта</Link>
        </li>
        <li className='menu__list-item'>
          <Link to='/calculate'>Краситель</Link>
        </li>
        <li className='menu__list-item'>
          <Link to='/colors'>Цвета</Link>
        </li>
      </ul>
      <button>#</button>
    </nav>
  );
}
export { Header };
