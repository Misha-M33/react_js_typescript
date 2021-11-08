import React from 'react'
import {useHistory} from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const history=useHistory()
  return (
    <>
    <h1>Страница информации</h1>
    <p>Попробовал React-Typescript гемора больше, подсказки приятны. 
      Только регуляные тренировки с положительной обратной связью дают
      возможность двигаться в заданном направлении. 
      Вперед, вперед мелкими шагами .......
    </p>
    <button className="btn" onClick={()=> history.push('/') } >
      Обратно к списку дел
    </button>
    </>
  )
}