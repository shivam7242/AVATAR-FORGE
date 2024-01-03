import React from 'react'
import { data } from '../data/question';
import '../css/PresetQuestion.css'

const PresetQuestion = () => {
  return (
    <div className='preset-question-container'>
        {data.map((question) => {
            return <div className='preset-question-body'>
                <text className='question-heading'>{question.name}</text>
            </div>
        })}
    </div>
  )
}

export default PresetQuestion
