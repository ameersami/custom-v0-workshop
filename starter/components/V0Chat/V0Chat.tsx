'use client';

import { JSX } from 'react';
import model from '@/ai/model';

import styles from './V0Chat.module.css';

interface v0ChatProps {
  handleModel: typeof model;
}

interface ChatHistory {
  type: 'user' | 'response';
  textContent?: string;
  componentContent?: JSX.Element;
  componentTextString?: string;
}

export default ({ handleModel }: v0ChatProps) => {

  return (
    <div className={styles.container}>

    </div>
  )
};