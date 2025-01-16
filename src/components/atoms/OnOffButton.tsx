import React from 'react';
import { OnOffButtonProps } from '../../interfaces/atoms/OnOffButton.interfaces';
import {ToggleSwitch, ToggleButton} from '../../styles/atoms/OnOffButton.styles'

const OnOffToggleButton: React.FC<OnOffButtonProps> = ({isOn, toggle}) => {
  return (
    <ToggleSwitch isOn={isOn} onClick={toggle}>
      <ToggleButton isOn={isOn} />
    </ToggleSwitch>
  );
};

export default OnOffToggleButton;
