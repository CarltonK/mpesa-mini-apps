import React from "react";
import styled from 'styled-components';

const Button = styled.button({
    backgroundColor: 'red',
    padding: '10px 20px',
    borderRadius: '10px',
    color: 'white',
});

function StyledComponentButton() {
    return <Button>Click There</Button>;
}

export default StyledComponentButton;