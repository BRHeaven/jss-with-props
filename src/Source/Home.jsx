import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import { StyleDivList } from '../Jss/Div';
function Home(props) {
    const renderUser = () => {
        return props.data.dataUser.map((object, index) => {
            return <Card object={object} key={index}/>
        });
    }
  return (
    <section>
        <StyleDivList>
            {renderUser()}
        </StyleDivList>
    </section>
  )
};
const mapStateToProps = state => {
    return {
        data : state.dataReducer,
    };
  };
export default connect(mapStateToProps, null)(Home);
