import React, { ReactNode, CSSProperties } from 'react';
import classes from './ListWithSelectionTile.module.css';
import FormContainer from '../wrappers/formContainer/FormContainer';
import PrimaryButton from '../buttons/primaryButton/PrimaryButton';
import SelectionTile from '../selections/selectionTile/SelectionTile';




interface ListWithSelectionTileProps {
  testId: string;
  responsive?:boolean;
  listchildren?:ReactNode;
  onTileClick: (item: any, index: number) => void;
  selected?: number;
  tileListLabel:string;
  selectionTileList: {
    icon?: { name: string; color: string; size: number };
    image?: any;
    imageStyle?: CSSProperties;
    iconLabel?: string;
    centeredText?: string;
    centeredChild?: ReactNode;
    avatar?: {
      name: string;
      src?: string;
      initials?: string;
      initialsBg?: string;
    };
    accountTitle?: string;
    accountNumber?: string;
    amount?: string;
    children?: ReactNode;
  }[];
  TilerowStyle?: CSSProperties;
  Tilecentered?: boolean;
  btn1title:string;
  onButton1Click: () => void;
  btn1width:string;
  btn2title:string;
  onButton2Click :() => void;
  btn2width:string;
}




const ListWithSelectionTile: React.FC<ListWithSelectionTileProps> = ({
  testId,
  responsive,
  listchildren,
  selected,
  onTileClick,
  selectionTileList,
  TilerowStyle,
  Tilecentered,
  tileListLabel,
  onButton1Click,
  onButton2Click,
  btn1width,
  btn2width,
  btn1title,
  btn2title
}) => {
  const {} = classes;

  return (
      <div id={testId} className={classes.mainContainer}>
          <FormContainer
            responsive={responsive}
            children={listchildren}
          />
          <div style={{marginTop:'1.5rem',marginBottom:'2.5rem'}}>
            <FormContainer
            responsive={responsive}
            label={tileListLabel}
            children={
              <div style={{width:'100%'}}>
            <SelectionTile
               responsive={responsive} 
               onTileClick={onTileClick}
              selected={selected}
              list={selectionTileList}
              rowStyle={TilerowStyle}
              centered={Tilecentered}
            />
            </div>
            }
          />
          </div>
         <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
          <div style={{padding:'0rem 0rem 1rem 0rem'}}>
          <PrimaryButton
            title={btn1title}
            onButtonClick={onButton1Click}
            width={btn1width}
          />
       </div>
       <div>
          <PrimaryButton
            onButtonClick={onButton2Click}
            title={btn2title}
            titleColor="#000000"
            buttonColor={{ top: "#BDBDBD", bottom: "#BDBDBD" }}
            width={btn2width}
          />
      </div>
      </div>
      </div>
     
  );
};

export default ListWithSelectionTile;

ListWithSelectionTile.defaultProps = {
  responsive : false
}