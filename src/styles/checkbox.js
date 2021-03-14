import styled from 'styled-components'

export const CheckBoxMaterial = styled.div`
  display: inline-block;
  padding: 10px 20px 20px 0px;
  transform: translateZ(0);
  font-size: 12px;

  label {
    cursor: pointer;
    padding-left: 0;
    font-size: 14px;
  }

  input[type='checkbox'] {
    opacity: 0;
    position: absolute;
    margin: 0;
    z-index: -1;
    width: 0;
    height: 0;
    overflow: hidden;
    left: 0;
    pointer-events: none;
  }

  .checkbox-material {
    vertical-align: middle;
    position: relative;
    top: 3px;
  }

  .checkbox-material:before {
    position: absolute;
    left: 8px;
    top: 2px;
    content: '';
    height: 4px;
    width: 4px;
    border-radius: 100%;
    z-index: 1;
    opacity: 0;
    margin: 0;
    background-color: ${props => props.theme.colors.primary};
  }

  .checkbox-material .check {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid;
    border-radius: 2px;
    overflow: hidden;
    z-index: 1;
    color: ${props => props.theme.colors.primary};
  }

  .checkbox-material .check:before {
    position: absolute;
    content: '';
    transform: rotate(45deg);
    display: block;
    margin-top: -4px;
    margin-left: 6px;
    width: 0;
    height: 0;
    box-shadow: 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0,
      0 0 0 0 inset;
    -webkit-animation: checkbox-off 0.3s forwards ease-out;
    animation: checkbox-off 0.3s forwards ease-out;
  }

  input[type='checkbox']:focus + .checkbox-material .check:after {
    opacity: 0.2;
  }

  .coloured input[type='checkbox']:checked + .checkbox-material .check {
    color: ${props => props.theme.colors.primary};
  }

  input[type='checkbox']:checked + .checkbox-material .check:before {
    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0px 0 20px, 0px 32px 0 20px,
      -5px 5px 0 10px, 20px -12px 0 11px;
    -webkit-animation: checkbox-on 0.3s forwards ease-out;
    animation: checkbox-on 0.3s forwards ease-out;
  }

  input[type='checkbox']:not(:checked) + .checkbox-material:before {
    -webkit-animation: rippleOff 700ms forwards ease-out;
    animation: rippleOff 700ms forwards ease-out;
  }

  input[type='checkbox']:checked + .checkbox-material:before {
    -webkit-animation: rippleOn 700ms forwards ease-out;
    animation: rippleOn 700ms forwards ease-out;
  }

  input[type='checkbox']:not(:checked) + .checkbox-material .check:after {
    -webkit-animation: rippleOff 700ms forwards ease-out;
    animation: rippleOff 700ms forwards ease-out;
  }

  input[type='checkbox']:checked + .checkbox-material .check:after {
    -webkit-animation: rippleOn 700ms forwards ease-out;
    animation: rippleOn 700ms forwards ease-out;
  }

  input[type='checkbox'][disabled]:not(:checked)
    ~ .checkbox-material
    .check:before,
  .checkbox input[type='checkbox'][disabled] + .circle {
    opacity: 0.5;
  }

  input[type='checkbox'][disabled] + .checkbox-material .check:after {
    background-color: ${props => props.theme.colors.primary};
    transform: rotate(-45deg);
  }
`
