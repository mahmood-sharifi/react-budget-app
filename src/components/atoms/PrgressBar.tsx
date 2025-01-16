import React from 'react';

import { ProgressBarProps } from '../../interfaces/atoms/ProgressBar.interfaces';
import { ProgressBarWrapper, ProgressBarCompleted } from '../../styles/atoms/ProgressBar.styles';

const ProgressBar: React.FC<ProgressBarProps> = ({ percent }) => {
  return (
    <ProgressBarWrapper>
      <ProgressBarCompleted percent={percent} />
    </ProgressBarWrapper>
  );
};

export default ProgressBar;