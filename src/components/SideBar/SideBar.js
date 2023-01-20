import { Component } from 'react';
import Btn from '../Btn/Btn';
import './SideBar.css'

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.menuItems = [
      'Статистика',
      'Неисправности',
      'Обслуживание',
      'Запчасти'
    ];
  }

  goTo(item, e) {
    e.preventDefault();

    console.log(item);
  }

  render() {
    const menu = this.menuItems.map((item, index) => {
      return (
        <li
          key={index.toString()}
          className='side-bar__menu-item'
          onClick={(e) => this.goTo(item, e)}
        >
          {item}
        </li>
      )
    })

    return (
      <div className='side-bar'>
        <Btn text="Выход" />
        <ul className='side-bar__menu'>{menu}</ul>
      </div>
    )
  }
}

export default SideBar;