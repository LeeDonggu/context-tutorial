import React, { useContext } from 'react';
import ColorContext from '../contexts/color';

const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    // <ColorConsumer>
    //   {/* value.state 구조분해 할당 사용 */}
    //   {({ state }) => (
    //     <>
    //       <div
    //         style={{
    //           width: '64px',
    //           height: '64px',
    //           background: state.color,
    //         }}
    //       />
    //       <div
    //         style={{
    //           width: '32px',
    //           height: '32px',
    //           background: state.subcolor,
    //         }}
    //       />
    //     </>
    //   )}
    // </ColorConsumer>

    // useContext 적용
    <>
      <div
        style={{
          width: '64px',
          height: '64px',
          background: state.color,
        }}
      />
      <div
        style={{
          width: '32px',
          height: '32px',
          background: state.subcolor,
        }}
      />
    </>
  );
};

export default ColorBox;
