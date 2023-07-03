import React from 'react';
import { connect } from 'react-redux';
import { StyleDivCard, StyleDivImage, StyleDivTitle } from '../Jss/Div';
import { ImageAvatar } from '../Jss/Image';
import { TextDMY, TextName } from '../Jss/Text';
function Card(props) {
    let {id,name,dd,mm,yy,srcImage} = props.object;
    console.log(props.object);
  return (
    <StyleDivCard>
        <StyleDivImage>
            <ImageAvatar src={srcImage} alt={id}/>
        </StyleDivImage>
        <StyleDivTitle>
            <TextName>{name}</TextName>
            <TextDMY>{dd}/{mm}/{yy}</TextDMY>
        </StyleDivTitle>
    </StyleDivCard>
  )
};
const mapStateToProps = state => {
    return {
        dataUser : state.dataReducer,
    };
  };
const mapDispatchToProps = (dispatch) => {
    return {
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(Card);