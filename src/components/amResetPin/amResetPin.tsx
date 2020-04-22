import React from "react";
import classes from './amResetPin.module.css';
import Paragraphs from '../assets/typography';
import Icon from "src/components/assets/icons/icon";
import OutsideClickHandler from "react-outside-click-handler";
const { SB_18_BLACK } = Paragraphs;


interface ResetPinProps {
  testId: string;
  keysArray:FixedArray<1|2|3|4|5|6|7|8|9|0,10>
  onNumberSelected?:any;
  onEnterClick?:() => void;
  EnterIcon: { name: string; color?: string; size?: number };
  pointerTopVal?:number;
  onOutsideClickHandler?:() => void;
}

type Grow<T, A extends Array<T>> = ((x: T, ...xs: A) => void) extends ((...a: infer X) => void) ? X : never;
type GrowToSize<T, A extends Array<T>, N extends number> = { 0: A, 1: GrowToSize<T, Grow<T, A>, N> }[A['length'] extends N ? 0 : 1];

export type FixedArray<T, N extends number> = GrowToSize<T, [], N>;



const AmResetPin: React.FC<ResetPinProps> = ({
  keysArray,onNumberSelected,onEnterClick,EnterIcon,pointerTopVal,onOutsideClickHandler
}) => {
  const {mainContainer,outerContainer,numberContainer,extraPropsContainer,numberPadContainer,tipContentStyle
  } = classes;


  return (
    <OutsideClickHandler
    onOutsideClick={onOutsideClickHandler}
  >
    <div className={mainContainer} >
      <div className={tipContentStyle} style={{top:pointerTopVal}}/>
      <div className={outerContainer}>
      <div className={numberPadContainer}>
      {keysArray.map((item: any, index: any) => {
          if(index <=8){
            return(
              <div 
              key={index}
              id={`resetPin-0-${index}`}
              className={numberContainer} 
              onClick={()=> onNumberSelected(item)}>
                <SB_18_BLACK>{item}</SB_18_BLACK>
                </div>
              );
          }
          else{
            return <div />
          }
        })}
        <div>
       
        </div>
      </div>
      <div className={extraPropsContainer} >
      <div className={numberContainer} onClick={()=> onNumberSelected(keysArray[9])}>
      <SB_18_BLACK>{keysArray[9]}</SB_18_BLACK>
      </div>
     <div className={numberContainer} onClick={onEnterClick}>
      { !!EnterIcon &&  <Icon icon={EnterIcon.name || "system-close-grey"} color={EnterIcon.color || "#444444"} size={EnterIcon.size || 15} /> }
     </div>
      </div>
      </div>
    
  </div>
  </OutsideClickHandler>
  );
};

export default AmResetPin;
