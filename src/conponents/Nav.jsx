import React, {useContext} from 'react';//상위컴포넌트에서 프롭스 내려받기
import {DataContext} from './../App';
import {NavLink} from 'react-router-dom';

const Nav = () => {
  const {data, loading} = useContext(DataContext)

  if(loading){
    return <h1 className='loading'>데이터 로딩 중입니다.</h1>
  }
  const categories = [...new Set(data.map((itme)=>itme.RCP_PAT2) )];// 중복된 제목은 제거하고 고유한 값을 set 객체로 생성
  //새로운 배열로 만들어 categories 변수에 반환

  console.log(categories)

  const activeStyle={
    color: '#f00',
    textShadow: '2px 2ox 5px #000'
  }

  return (
    <div className='nav'>
      <div className="inner">
          
          <ul className="menu">
           
           {
              categories.map((category) => (
                <li key={category.RCP_SEQ}>
                    <NavLink to={`category/${category}`} style={({isActive})=> (isActive? activeStyle: undefined)}>{category}</NavLink>
                </li>
              ))
            }
          </ul>
      </div>
    </div>
  );
};

export default Nav;